---
title: Modding with Rust
description: High-performance, memory-safe modding using the greg-rust-sdk
path: /guides/languages/rust
---

# 🦀 Modding with Rust

Rust is supported in gregCore for developers who require maximum performance and memory safety. Through a specialized C-FFI bridge and the `greg-rust-sdk` crate, you can build high-performance systems that live alongside the Unity engine.

---

## 🛠️ Setup & Requirements

1.  **Rust Toolchain**: Install `rustup` from [rust-lang.org](https://www.rust-lang.org/).
2.  **Target**: You must compile for `x86_64-pc-windows-msvc`.
3.  **greg-rust-sdk**: Add our crate to your `Cargo.toml`.

```toml
[dependencies]
greg-sdk = { version = "1.0", features = ["full"] }
```

---

## 🏗️ Project Structure

A typical Rust mod is a dynamic library (`cdylib`) that is loaded by gregCore's Rust-Bridge.

```text
my-rust-mod/
  src/
    lib.rs
  Cargo.toml
```

### Cargo Configuration
Your `Cargo.toml` must specify `cdylib`:

```toml
[lib]
crate-type = ["cdylib"]
```

---

## 🏗️ The Entry Point

Your mod communicates with gregCore via the `greg_init` export. The `greg-sdk` provides macros to simplify this.

```rust
use greg_sdk::prelude::*;

#[greg_mod]
pub fn init() {
    greg::log_info("Rust Mod: Systems engaged.");
    
    // Subscribe to a hook
    greg::subscribe("greg.hardware.ServerPowered", |payload| {
        let id = payload.get_string("InternalId");
        greg::log_info(&format!("Server {} pulsed in Rust!", id));
    });
}
```

---

## 🪝 Using Hooks and Services

The Rust SDK provides typesafe wrappers around the gregCore EventBus and Services.

### Economy Interaction
```rust
let balance = greg::economy::get_balance();
if balance > 1000.0 {
    greg::economy.subtract_balance(500.0);
    greg::show_notification("Rust tax collected!");
}
```

---

## 💾 Performance & Memory

Because Rust runs in a separate memory space from the .NET runtime, gregCore uses a **shared memory buffer** for payloads.
*   **Zero-Copy Reading**: When reading strings or vectors from a payload, you are often looking at a pointer directly into the shared buffer.
*   **Safety**: The `greg-sdk` ensures that these pointers are valid for the duration of the callback.

---

## 🔨 Building and Deployment

1.  Run `cargo build --release`.
2.  Copy the resulting `.dll` from `target/release/my_mod.dll` to `Data Center/Mods/Rust/`.
3.  Rename it to match your desired mod ID if necessary.

---

## 🐞 Debugging Rust Mods

*   **Panic Handling**: If your Rust code panics, the `greg-sdk` will attempt to catch the panic and log the message to the MelonLoader console instead of crashing the entire game.
*   **Logging**: Use the standard `log` crate macros (`info!`, `warn!`, `error!`) which are automatically piped into gregCore's logging system.

---

## 📖 Related Links
*   [**Rust SDK Source**](https://github.com/gregCore/greg-rust-sdk)
*   [**Shared Buffer Architecture**](/advanced/memory/shared-buffer)
*   [**Example: HardwareMonitor (Rust)**](/community/examples/hardware-monitor-rust)
