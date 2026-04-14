---
id: content-creation-custom-servers
title: Custom Servers
sidebar_label: Custom Servers
description: Define and register custom server content with gregCore-compatible bootstrap flow.
---

**Layer ownership:** content definitions live in the **Mod Layer**; registration hooks into the **Core SDK layer**.

## Capability status (v1.0.0-pre.4)

- **Ready:** Official `GregServerRegistry` and `ServerDefinition` types are available in `gregSdk`.
- **Validation:** Use `ServerValidator` for automatic schema enforcement.
- **Injection:** Content is automatically registered into the framework's internal catalogs.

## Server definition schema

Create `Content/Servers/EnterpriseRackServer.json`:

```json
{
  "id": "ccp.server.enterprise_rack_v1",
  "name": "Enterprise Rack Server",
  "serverTypeId": "ccp.servertype.enterprise",
  "rackUnits": 4,
  "powerUsageWatts": 540,
  "maxIOPS": 12000,
  "price": 42000,
  "tags": ["EnterpriseGrade", "RackMount"],
  "modelOverridePath": "Models/Servers/EnterpriseRackServer.prefab"
}
```

## C# Registration flow

You no longer need to implement your own validator or registry logic. Use the official `gregSdk` components:

```csharp
using gregSdk.Definitions;
using gregSdk.Registries;
using gregSdk.Validators;

public static class ServerRegistrar
{
    public static void Register(ServerDefinition server)
    {
        // 1. Get the official registry
        var registry = new GregServerRegistry();

        // 2. The registry automatically uses ServerValidator
        registry.Register(server);

        MelonLogger.Msg($"[Mod] Registered server: {server.Id}");
    }
}
```

## Availability and spawn logic

The framework automatically maps these definitions to game systems. To react to a purchase, use the normalized hooks:

```csharp
using gregSdk;

gregEventDispatcher.On(gregNativeEventHooks.SystemButtonBuyShopItem, payload => {
    var itemId = gregPayload.Get<string>(payload, "EntityId");
    // Handle post-purchase logic
});
```

Next: [Custom switches](/wiki/development/content-creation/custom-switches).
