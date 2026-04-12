---
title: Rust/Native Modding Guide
sidebar_label: Rust (Native)
description: How to build native mods in Rust using the gregCore FFI bridge.
---

# Rust Modding with gregCore

Rust is preferred for high-performance logic, low-level engine access, and compiled safety.

## 1. Project Setup

Use the **`HexLabelMod`** Rust template.

1. Copy the `rust/` folder from the `HexLabelMod` template.
2. The template includes a `Cargo.toml` configured for building a dynamic library (`cdylib`).
3. Include `greg_api.h` in your project if you need to use the C-compatible header for FFI.

## 2. Consuming the API

Native mods receive a function pointer table from `gregCore`.

### Event Subscription

Subscribe to events via the `subscribe_event` function pointer:

```rust
// Pseudocode for Rust FFI usage
unsafe {
    (api.subscribe_event)(
        "greg.NETWORK.TopologyValidated\0".as_ptr() as *const c_char,
        Some(my_handler_callback),
        "my_mod_id\0".as_ptr() as *const c_char,
    );
}

extern "C" fn my_handler_callback(payload: *mut c_void) {
    // Process the payload dynamically
}
```

### HUD, IMGUI, and Targeting

Access the native Unity IMGUI surface and perform raycasts:

```rust
unsafe {
    let mut out_name: *const c_char = std::ptr::null();
    let mut out_dist: f32 = 0.0;
    let mut out_x: f32 = 0.0;
    let mut out_y: f32 = 0.0;
    let mut out_z: f32 = 0.0;

    let hit = (api.raycast_forward)(10.0, &mut out_name, &mut out_dist, &mut out_x, &mut out_y, &mut out_z);

    if hit != 0 {
        (api.gui_begin_panel)("TargetPanel\0".as_ptr() as *const c_char, 10.0, 10.0, 300.0, 100.0);
        (api.gui_label)("Target Acquired!\0".as_ptr() as *const c_char);
        (api.gui_end_panel)();
    }
}
```

## 3. Deployment

1. Build your Rust project using `cargo build --release`.
2. Copy the resulting `.dll` (or `.so`) from `target/release/` to `Data Center/Mods/RustMods/`.
3. Ensure `gregCore.dll` is present in `Data Center/Mods/`.
