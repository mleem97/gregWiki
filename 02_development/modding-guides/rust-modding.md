---
title: Rust/Native Modding Guide
sidebar_label: Rust (Native)
description: How to build native mods in Rust using the new gregCore RustFFI bridge.
---

# Rust Modding with gregCore

Rust is preferred for high-performance logic, low-level networking, and complex technical simulations. gregCore introduces a dedicated **`RustFFIBridge`** that provides a function pointer table directly to your native plugin.

## 1. Project Setup

Your Rust project must compile as a `cdylib`.

### `Cargo.toml`

```toml
[package]
name = "my_rust_mod"
version = "1.0.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
# No external dependencies required for the base bridge
```

## 2. Implementing the Exports

gregCore communicates with your DLL via specific C-FFI exports.

### Required Exports

```rust
use std::os::raw::{c_char, c_void};
use std::ffi::{CStr, CString};

#[repr(C)]
pub struct GregModInfo {
    pub id:          *const c_char,
    pub name:        *const c_char,
    pub version:     *const c_char,
    pub author:      *const c_char,
    pub description: *const c_char,
    pub api_version: u32,
}

#[no_mangle]
pub extern "C" fn greg_mod_info() -> GregModInfo {
    GregModInfo {
        id:          b"my_rust_mod\0".as_ptr() as *const c_char,
        name:        b"My Rust Mod\0".as_ptr() as *const c_char,
        version:     b"1.0.0\0".as_ptr() as *const c_char,
        author:      b"Modder\0".as_ptr() as *const c_char,
        description: b"High performance logic.\0".as_ptr() as *const c_char,
        api_version: 1,
    }
}

#[no_mangle]
pub extern "C" fn greg_mod_init(api: *const GregCoreAPI) -> bool {
    // Store the API pointer and initialize your logic
    true
}
```

### Optional Exports

```rust
#[no_mangle] pub extern "C" fn greg_mod_update(dt: f32) { /* Every frame */ }
#[no_mangle] pub extern "C" fn greg_mod_event(event_id: u32, data: u64) { /* On events */ }
#[no_mangle] pub extern "C" fn greg_mod_shutdown() { /* On cleanup */ }
```

## 3. The GregCoreAPI Table

The `greg_mod_init` function receives a pointer to a struct containing function pointers to all `GregAPI` methods.

```rust
#[repr(C)]
pub struct GregCoreAPI {
    pub api_version: u32,
    pub log_info:    extern "C" fn(*const c_char),
    pub get_player_money: extern "C" fn() -> f64,
    pub set_player_money: extern "C" fn(f64),
    // ... see full reference in API documentation
}
```

## 4. Deployment

1. Build your Rust project: `cargo build --release`.
2. Copy the resulting `.dll` to `Data Center/Plugins/Rust/`.
3. Start the game.
