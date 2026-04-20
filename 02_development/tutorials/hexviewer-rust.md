---
id: hexviewer-rust
title: HexViewer Mod Tutorial (Rust)
sidebar_label: HexViewer in Rust
description: Technical writing tutorial for the HexViewer Rust implementation using JADE Style and the v8 gregSdk FFI API.
---

This page implements the **Rust High-Performance layer** for HexViewer.

Role in architecture:

- Direct FFI access to the **Official SDK API (v8)**
- Perform raycasting and HUD rendering at the native layer
- JADE-compliant layout with zero allocation in the hot path

> Layer ownership: Rust runs in the **Language Bridge layer** and communicates via a structured `greg_api_t` table.

## Introduction

Rust is preferred for mods that require high-frequency updates or complex geometric calculations. This tutorial demonstrates how to use the v8 API table to implement a JADE-style HUD.

## Project structure (Rust)

```text
gregMod.HexViewer/rust/
├─ Cargo.toml
├─ manifest.json
└─ src/
   ├─ lib.rs
   └─ hud.rs
```

## Rust implementation (v8 API)

`rust/src/lib.rs`:

```rust
use std::ffi::{c_char, c_void};
use std::sync::atomic::{AtomicPtr, Ordering};

pub mod hud;

#[repr(C)]
pub struct greg_api_t {
    pub api_version: u32,
    // ... (v1-v7 omitted for brevity)
    pub reserved_v1_v7: [usize; 60], 

    // v8 Official SDK API
    pub payload_get_string: extern "C" fn(*mut c_void, *const c_char, *const c_char) -> *const c_char,
    pub subscribe_event: extern "C" fn(*const c_char, extern "C" fn(*mut c_void), *const c_char),
    pub gui_begin_panel: extern "C" fn(*const c_char, f32, f32, f32, f32),
    pub gui_label: extern "C" fn(*const c_char),
    pub gui_end_panel: extern "C" fn(),
    pub raycast_forward: extern "C" fn(f32, *mut *const c_char, *mut f32, *mut f32, *mut f32, *mut f32) -> i32,
    pub publish_tick: extern "C" fn(f32, i32),
}

static API: AtomicPtr<greg_api_t> = AtomicPtr::new(std::ptr::null_mut());

#[no_mangle]
pub extern "C" fn mod_init(api: *mut greg_api_t) -> bool {
    if api.is_null() { return false; }
    API.store(api, Ordering::SeqCst);
    true
}

#[no_mangle]
pub extern "C" fn mod_on_gui() {
    let api_ptr = API.load(Ordering::SeqCst);
    if api_ptr.is_null() { return; }
    unsafe {
        hud::update_hud(&*api_ptr);
    }
}
```

`rust/src/hud.rs`:

```rust
use std::ffi::{CStr, CString};
use crate::greg_api_t;

pub const JADE_GREEN: &str = "#80FF99";
pub const JADE_TEXT: &str = "#B8ECB8";

pub fn update_hud(api: &greg_api_t) {
    let mut out_name: *const std::ffi::c_char = std::ptr::null();
    let mut out_dist: f32 = 0.0;
    let mut out_x: f32 = 0.0;
    let mut out_y: f32 = 0.0;
    let mut out_z: f32 = 0.0;

    // Raycast using Official SDK API
    let hit = (api.raycast_forward)(10.0, &mut out_name, &mut out_dist, &mut out_x, &mut out_y, &mut out_z);
    
    if hit != 0 && !out_name.is_null() {
        let name_str = unsafe { CStr::from_ptr(out_name).to_string_lossy() };
        
        // JADE Panel Layout (400px width)
        (api.gui_begin_panel)(b"HexViewerJade\0".as_ptr() as *const _, 0.5, 0.1, 400.0, 200.0);
        
        // Header: ▶ <ObjectType>
        let header = format!("<color={}>▶ {}</color>", JADE_GREEN, name_str.to_uppercase());
        if let Ok(c_header) = CString::new(header) {
            (api.gui_label)(c_header.as_ptr());
        }

        // Data:   KEY      : Value (8-char keys)
        draw_row(api, "NAME", &name_str);
        draw_row(api, "DIST", &format!("{:.2}m", out_dist));
        draw_row(api, "POS", &format!("{:.1}, {:.1}, {:.1}", out_x, out_y, out_z));
        
        (api.gui_end_panel)();
    }
}

fn draw_row(api: &greg_api_t, key: &str, value: &str) {
    let row = format!("<color={}>  {:<8} : {}</color>", JADE_TEXT, key.to_uppercase(), value);
    if let Ok(c_row) = CString::new(row) {
        (api.gui_label)(c_row.as_ptr());
    }
}
```

## Official SDK API Policy

The Rust bridge uses the `greg_api_t` struct to access engine functions. Version 8 of the API introduces direct `raycast_forward` and `gui_*` methods to avoid string-based event overhead.

## Build pipeline

```powershell
cargo build --release --target wasm32-unknown-unknown
```

Deploy the resulting `.wasm` (or `.dll` if using native bridge) to the `Mods/RustMods/` folder.

## Integration

1. The game calls `mod_init` with the API table.
2. Every GUI frame, `mod_on_gui` is invoked.
3. The mod performs a raycast and updates the JADE panel immediately.

## Deploy and test

Validation checklist:

- WASM/DLL loads without symbols errors.
- Raycast identifies "Rack", "Cable", etc.
- JADE HUD colors (`#80FF99`) match the specification.

## Troubleshooting

- Null Pointer Exception: Always check if `api_ptr` is null before use.
- Alignment issues: Ensure `greg_api_t` struct layout matches the SDK version exactly.
- Linker errors: Verify that all `extern "C"` functions are correctly defined.
