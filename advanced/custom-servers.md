# Custom Servers Guide

Creating a custom server involves defining its stats, its model, and its behavior in the data center rack.

## 1. Define the Server Type
A server type is a data structure containing its identity and characteristics.

| Field | Description |
| :--- | :--- |
| `Id` | A unique string identifier (e.g., `my.server.100`). |
| `DisplayName` | The name shown in the shop and UI. |
| `Speed` | How many operations per second (IOPS) it performs. |
| `PowerUsage` | Watts consumed. |
| `FailureRate` | Probability of breaking over time (0.0 - 1.0). |
| `ModelOverride` | Path to the `.obj` or `.fbx` model. |

## 2. Registering the Server (C#)

```csharp
public override void OnLoad()
{
    Api.Server.RegisterType(new ServerType {
        Id = "ultra.server.9000",
        DisplayName = "Ultra Server 9000",
        Speed = 500.0f,
        PowerUsage = 150,
        FailureRate = 0.01f,
        ModelOverride = "assets/models/ultra_server.obj"
    });
}
```

## 3. Implementation Across Languages

| Language | Example Registration |
| :--- | :--- |
| **Lua** | `greg.register_server({ id = "lua.server", speed = 200 })` |
| **Python** | `greg.register_server({"id": "python.server", "speed": 250})` |
| **Rust** | `api.register_server(json_config);` |

## 4. Handling Hooks
You can customize what happens when your server is interacted with.

```csharp
Api.Hooks.On("greg.hardware.ServerPowered", payload => {
    if (payload.Data["typeId"] == "ultra.server.9000") {
        Logger.Info("Our special server just powered up!");
    }
});
```

---
[Back to Advanced Systems](README.md)
