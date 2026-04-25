# [Hook Name]

## 📝 Overview
- **Domain**: [e.g., greg.economy]
- **Category**: [e.g., Financial, Progression]
- **Framework Status**: [Stable / Experimental / Disabled]
- **API Availability**: [C#, Lua, Python, Rust, Go, JS]
- **Introduced**: [Version]

## ⚡ Trigger Condition
[Detailed technical explanation of when this hook fires. Mention the internal game method being patched if relevant for advanced users.]

## 📦 Payload Specification (`GregPayload`)
The `payload.Data` dictionary contains the following keys:
- `key_name` (type): [Exhaustive description of what this value represents, its range, and its source.]

## 🚀 Multi-Language Usage Matrix

### C# (Native)
```csharp
Api.Hooks.On("hook.name", (payload) => {
    // Technical rationale for this example
    var data = payload.Data["key"];
    Logger.Info($"Reaction logic: {data}");
});
```

### Lua (MoonSharp)
```lua
greg.on("hook.name", function(payload)
    -- Lua-specific handling
    local data = payload.data.key
    greg.log_info("Reaction logic: " .. data)
end)
```

### Python (Python.Runtime)
```python
def on_hook_triggered(payload):
    # Pythonic data access
    data = payload['data']['key']
    greg.log_info(f"Reaction logic: {data}")

greg.on("hook.name", on_hook_triggered)
```

### Rust (FFI)
```rust
// Standard FFI callback signature
fn on_hook(hook: *const i8, trigger: *const i8, json: *const i8) {
    unsafe {
        let json_str = CStr::from_ptr(json).to_str().unwrap();
        // Parse and react
    }
}
```

### Go (FFI)
```go
//export onHook
func onHook(hook, trigger, json *C.char) {
    jsonData := C.GoString(json)
    // Reaction logic
}
```

### JavaScript (Jint)
```javascript
greg.on("hook.name", (payload) => {
    const data = payload.data.key;
    greg.logInfo(`Reaction logic: ${data}`);
});
```

## ⚠️ Known Caveats & Performance Notes
- [Detailed notes on thread safety, potential race conditions, or performance impact.]

## 🔗 Related Systems
- **Services**: [Link to related services]
- **Registries**: [Link to related registries]

---
[Back to Hook Catalog](../README.md)
