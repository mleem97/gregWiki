# Your First Mod

Building your first mod with gregCore is easy! This guide will show you how to create a simple "Hello World" mod in your favorite programming language.

## 🏛️ The "Hello World" Challenge
Our first mod will:
1.  Print a message to the in-game console when the mod is loaded.
2.  Show a notification when the player earns money.
3.  Register a custom setting.

## 🚀 C# (Native SDK)
Best for complex systems and high performance.

### 1. The Code
```csharp
using gregCore.PublicApi;
using gregCore.PublicApi.Attributes;

[GregMod("com.example.hello", "Hello World", "1.0.0")]
public class MyMod : GregMod
{
    public override void OnLoad()
    {
        // Register a setting
        Api.Settings.RegisterToggle("com.example.hello", "welcome", "Show Welcome", true);
    }

    public override void OnReady()
    {
        Logger.Info("Hello from C#!");
        
        // Listen to a hook
        Api.Hooks.On("greg.economy.MoneyChanged", (payload) => {
            Api.UI.ShowNotification("Money earned!");
        });
    }
}
```

## 🚀 Lua (Scripting)
The fastest way to script gameplay.

### 1. The Code (`main.lua`)
```lua
function on_init()
    greg.log_info("Hello from Lua!")
end

function on_ready()
    greg.on("greg.economy.MoneyChanged", function(payload)
        greg.show_notification("Money earned!")
    end)
end
```

## 🚀 Python (Scripting)
Great for data and automation.

### 1. The Code (`main.py`)
```python
def on_init():
    greg.log_info("Hello from Python!")

def on_ready():
    greg.on("greg.economy.MoneyChanged", lambda p: greg.show_notification("Money earned!"))
```

## 🚀 JavaScript (Scripting)
Modern ES6+ for web developers.

### 1. The Code (`hello.js`)
```javascript
greg.logInfo("Hello from JS!");

greg.on("greg.economy.MoneyChanged", (payload) => {
    greg.fire("greg.ui.ShowNotification", { message: "Money earned!" });
});
```

## 🚀 Rust (FFI)
Maximum performance and safety.

### 1. The Code (`lib.rs`)
```rust
#[no_mangle]
pub extern "C" fn greg_mod_init(api: *const GregCoreAPI) -> bool {
    unsafe {
        let api = &*api;
        (api.log_info)("Hello from Rust!\0".as_ptr() as *const i8);
    }
    true
}
```

## 🚀 Go (FFI)
Modern, concurrent, and fast.

### 1. The Code (`main.go`)
```go
//export greg_mod_init
func greg_mod_init(api *GregCoreAPI) bool {
    api.LogInfo(C.CString("Hello from Go!"))
    return true
}
```

---
[Next: Framework Concepts](../02-framework-concepts/README.md)
