# Custom Servers: Technical Guide

::: info
**Target Audience**: Content Authors & Advanced Modders.
**Goal**: Learn how to define new server blueprints and integrate them into the *Data Center* economy.
:::

Adding custom servers is a powerful way to expand the hardware variety of the game. gregCore handles the complexity of IL2CPP mesh replacement, performance stat injection, and save-file persistence for you.

## 🏛️ The Server Data Model

A server is more than just a 3D model. It is a set of **Technical Specifications** that determine its performance in a rack.

### 📝 Technical Specification (`ServerType`)
| Field | Type | Description |
| :--- | :--- | :--- |
| **`Id`** | string | Unique, persistent internal name (e.g., `com.myname.quantum.v1`). |
| **`DisplayName`** | string | The name shown in the shop and inventory. |
| **`Speed`** | float | IOPS (Operations per second). Higher = more profit per tick. |
| **`PowerUsage`** | int | Watts consumed per hour. |
| **`FailureRate`** | float | Probability (0.0 - 1.0) of a "Broken" event per hour. |
| **`Price`** | int | The base cost in the game's shop. |
| **`ModelOverride`** | string | Path to a custom `.obj` or `.fbx` model file. |

## 🛠️ Implementation Workflow

### 1. Registration (`OnLoad`)
You must register your server type during the framework's **`OnLoad`** phase. This ensures that the game's save-system and shop are aware of your hardware before the world is loaded.

```csharp
public override void OnLoad()
{
    var quantumServer = new ServerType {
        Id = "com.greg.quantum.x1",
        DisplayName = "Quantum X1 Pro",
        Speed = 2500.0f,
        PowerUsage = 50,
        FailureRate = 0.005f,
        Price = 15000,
        ModelOverride = "mods/assets/quantum_server.obj"
    };

    Api.Server.RegisterType(quantumServer);
}
```

### 2. Interaction Hooks
Once registered, your server will fire the same hooks as native servers. You can use these to add specialized logic.

| Language | Hook Subscription | Reaction Logic |
| :--- | :--- | :--- |
| **C#** | `Api.Hooks.On("greg.hardware.ServerPowered", p => ...)` | Check `p.Data["typeId"] == "com.greg.quantum.x1"` |
| **Lua** | `greg.on("greg.hardware.ServerPowered", function(p) ...)` | `if p.data.typeId == "com.greg.quantum.x1" then ... end` |

## 🛡️ Best Practices
- **Persistent IDs**: Never change your `Id` once you have released your mod. If you change it, any servers that players have already placed will disappear from their racks.
- **Model Scaling**: Standard server slots in *Data Center* are approx. **0.5m wide x 0.1m high x 0.8m deep**. Ensure your custom model fits within these bounds.
- **Performance**: High-IOPS servers should have a correspondingly high power usage to maintain game balance.

## ⚡ Related Hooks
- **[`greg.hardware.ServerPowered`](/api/hooks/hardware#serverpowered)**: Fires when power is toggled.
- **[`greg.hardware.ServerBroken`](/api/hooks/hardware#serverbroken)**: Fires when a hardware failure occurs.

---
[Back to Content Guides](/guides/content)
