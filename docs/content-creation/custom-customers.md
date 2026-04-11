---
id: content-creation-custom-customers
title: Custom Customers
sidebar_label: Custom Customers
slug: /development/content-creation/custom-customers
description: Define customer segments, requirements, budgets, and ownership assignment rules for custom content.
---

**Layer ownership:** customer definitions are in the **Mod Layer**; assignment/runtime checks run in the **Core SDK layer**.

## Capability split

- **Already possible:** represent customer metadata and react to customer-related `greg.*` events.
- **Needs FrameworkExtension:** typed customer registry and contract requirement evaluator.
- **Currently missing:** documented API for injecting fully custom customer entities into native contract generation.

## Customer definition

Create `Content/Customers/NorthFinanceGroup.json`:

```json
{
  "id": "ccp.customer.fin_north",
  "name": "North Finance Group",
  "segment": "Finance",
  "requirements": {
    "minUptime": 99.95,
    "requiredServerTier": "Enterprise",
    "preferredLatencyMs": 2,
    "securityProfile": "Strict"
  },
  "budget": 250000,
  "ownershipRules": {
    "allowedServerTypeIds": ["ccp.servertype.enterprise", "ccp.servertype.edge"],
    "requiresDedicatedSwitch": true
  }
}
```

## Assignment model

```csharp
namespace CustomContentPack.Runtime;

public sealed class CustomerOwnershipRule
{
    public string[] AllowedServerTypeIds { get; set; } = System.Array.Empty<string>();
    public bool RequiresDedicatedSwitch { get; set; }
}
```

## Runtime usage pattern

Hook into customer events and enforce assignment constraints in your mod logic:

```csharp
using gregSdk;

namespace CustomContentPack.Runtime;

public static class CustomerRuntimePolicy
{
    public static void Install()
    {
        GregEventDispatcher.On("greg.SYSTEM.ButtonCustomerChosen", payload =>
        {
            // Evaluate selected customer against content ownership rules.
            // Keep this logic deterministic and data-driven.
        }, "CustomContentPack");
    }
}
```

## Framework extension candidate

Placeholder (not documented API):

```csharp
// Placeholder only.
// GregContentRegistry.RegisterCustomerDefinition(CustomerDefinition definition);
```

Use local `Docs/MISSING.md` if customer registry support is required for your scenario.

Next: [Custom network items](/wiki/development/content-creation/custom-network-items).
