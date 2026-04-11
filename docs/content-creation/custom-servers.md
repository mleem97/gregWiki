---
id: content-creation-custom-servers
title: Custom Servers
sidebar_label: Custom Servers
slug: /development/content-creation/custom-servers
description: Define and register custom server content with gregCore-compatible bootstrap flow.
---

**Layer ownership:** content definitions live in the **Mod Layer**; registration hooks into the **Core SDK layer**.

## Capability split

- **Already possible:** load JSON definitions, bind runtime behavior via `HookBinder` / `GregEventDispatcher`.
- **Needs FrameworkExtension:** official server registry and spawn catalog API.
- **Currently missing:** documented typed API to inject custom server SKUs into native purchase/spawn systems.

## Server definition schema

Create `Content/Servers/EnterpriseRackServer.json`:

```json
{
  "id": "ccp.server.enterprise_rack_v1",
  "displayName": "Enterprise Rack Server",
  "serverTypeId": "ccp.servertype.enterprise",
  "slots": 4,
  "computeScore": 280,
  "powerWatts": 540,
  "price": 42000,
  "customerTier": "Enterprise",
  "defaultOwnerCustomerId": "ccp.customer.fin_north",
  "optionalModel": "Models/Servers/EnterpriseRackServer.prefab",
  "tags": ["rack", "high-density", "custom-content-pack"]
}
```

## Server type definition

Create `Content/ServerTypes/EnterpriseType.json`:

```json
{
    "id": "ccp.servertype.enterprise",
    "displayName": "Enterprise",
    "tier": 3,
    "description": "High-density business-critical server class",
    "availability": {
        "minPlayerLevel": 12,
        "requiresReputation": 30
    }
}
```

## C# model + validation

Create `Scripts/Runtime/ServerDefinition.cs`:

```csharp
namespace CustomContentPack.Runtime;

public sealed class ServerDefinition
{
    public string Id { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
    public string ServerTypeId { get; set; } = string.Empty;
    public int Slots { get; set; }
    public int ComputeScore { get; set; }
    public int PowerWatts { get; set; }
    public int Price { get; set; }
    public string CustomerTier { get; set; } = string.Empty;
    public string DefaultOwnerCustomerId { get; set; } = string.Empty;
    public string? OptionalModel { get; set; }
}
```

Create `Scripts/Registries/ServerDefinitionValidator.cs`:

```csharp
using System.Collections.Generic;
using CustomContentPack.Runtime;

namespace CustomContentPack.Registries;

public static class ServerDefinitionValidator
{
    public static IReadOnlyList<string> Validate(ServerDefinition definition)
    {
        var issues = new List<string>();

        if (string.IsNullOrWhiteSpace(definition.Id)) issues.Add("id is required");
        if (string.IsNullOrWhiteSpace(definition.ServerTypeId)) issues.Add("serverTypeId is required");
        if (definition.Slots <= 0) issues.Add("slots must be > 0");
        if (definition.ComputeScore <= 0) issues.Add("computeScore must be > 0");
        if (definition.PowerWatts <= 0) issues.Add("powerWatts must be > 0");
        if (definition.Price < 0) issues.Add("price must be >= 0");

        return issues;
    }
}
```

## Registration flow

Create `Scripts/Registries/ServerRegistrar.cs`:

```csharp
using System.Collections.Generic;
using MelonLoader;
using CustomContentPack.Runtime;

namespace CustomContentPack.Registries;

public static class ServerRegistrar
{
    public static void Register(IReadOnlyList<ServerDefinition> servers)
    {
        foreach (var server in servers)
        {
            var issues = ServerDefinitionValidator.Validate(server);
            if (issues.Count > 0)
            {
                MelonLogger.Warning($"[CustomContentPack] Skip server {server.Id}: {string.Join(", ", issues)}");
                continue;
            }

            // Placeholder API: not documented in current gregCore wiki.
            // GregContentRegistry.RegisterServerType(server);

            // Placeholder API: not documented in current gregCore wiki.
            // GregContentRegistry.RegisterServerCategory(server.ServerTypeId);

            MelonLogger.Msg($"[CustomContentPack] Prepared server definition: {server.Id}");
        }
    }
}
```

## Availability and spawn logic

Use documented hooks/events to drive availability gates:

```csharp
using GregFramework.Hooks;

namespace CustomContentPack.Runtime;

public static class RuntimeIntegration
{
    public static void InstallHooks()
    {
        HookBinder.OnAfter("greg.SYSTEM.ButtonBuyShopItem", OnShopBuyAfter);
    }

    private static void OnShopBuyAfter(HookContext context)
    {
        // Use payload/context to apply custom gating rules.
        // Do not call undocumented game internals directly.
    }
}
```

Next: [Custom switches](/wiki/development/content-creation/custom-switches).
