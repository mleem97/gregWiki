# Custom Switches Guide

Switches are complex networking objects. gregCore allows you to define new switches with custom port configurations and routing logic.

## 1. Switch Definition
A switch definition includes:
- `Id`: Unique ID.
- `PortCount`: Number of network ports.
- `PortTypes`: (SFP, SFP+, Copper).
- `Throughput`: Maximum bandwidth.
- `ModelOverride`: Visual representation.

## 2. Registering the Switch (C#)

```csharp
Api.Network.RegisterSwitch(new SwitchConfig {
    Id = "nexus.switch.48",
    DisplayName = "Nexus 48-Port Switch",
    PortCount = 48,
    MaxThroughput = 10000.0f, // 10 Gbps
    ModelOverride = "assets/models/nexus_48.obj"
});
```

## 3. Advanced Routing Logic
You can intercept the connection process to add custom routing rules.

```csharp
Api.Hooks.On("greg.network.CableConnected", payload => {
    var switchId = payload.Data["switchId"];
    var portIndex = payload.Data["portIndex"];
    Logger.Info($"Connection on switch {switchId} port {portIndex}");
});
```

## 4. Save Persistence
gregCore automatically handles the connection state and power status of your custom switches in the save file.

---
[Back to Advanced Systems](README.md)
