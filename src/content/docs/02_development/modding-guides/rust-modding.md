---
title: Rust/Native Modding Guide
sidebar_label: Rust (Native)
description: How to build native mods in Rust using the gregCore FFI bridge and the official SDK.
---

# Rust Modding with gregCore

Rust is preferred for high-performance logic, low-level networking, and complex technical simulations. With API v12, we introduce the official **`greg-rust-sdk`** which simplifies FFI management.

## 1. Setup

Your `Cargo.toml` should include the official SDK:

```toml
[package]
name = "my_rust_mod"
version = "1.0.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
greg-rust-sdk = { path = "../../../libs/greg-rust-sdk" }
```

## 2. Global API (v12)

gregCore provides a function pointer table (`GameAPITable`) containing all SDK services. Use the `define_greg_mod!` macro to initialize the bridge.

### UI Hijack (Master Prompt Architecture)

Following the official UI Hijack guidelines, you can replace vanilla menus directly from Rust:

```rust
use greg_rust_sdk::{define_greg_mod, get_api};

define_greg_mod!(MyMod);

fn initialize_ui() {
    let api = get_api();
    
    // Phase 2: Silent Takedown
    api.hijack_vanilla_canvas("PauseMenuCanvas");
    
    // Phase 3: New Foundation
    let canvas_ptr = api.create_modern_canvas("MyCustomPauseMenu", 999);
    
    api.log("UI Hijack successful.");
}
```

### Event Subscription

The SDK provides safe wrappers for event subscription:

```rust
#[no_mangle]
pub extern "C" fn mod_init(api_ptr: *const std::ffi::c_void) -> bool {
    let api = unsafe { greg_rust_sdk::GregApi::from_ptr(api_ptr) };
    
    // Example: Subscription logic here
    true
}
```

## 3. Deployment

1. Build your Rust project using `cargo build --release`.
2. Copy the resulting `.dll` from `target/release/` to `Data Center/Mods/RustMods/`.
3. Ensure `gregCore.dll` is present in `Data Center/Mods/`.

---
*Best Practice: Never use `Destroy()` on vanilla objects. Always use `hijack_vanilla_canvas` to safely hide elements.*
