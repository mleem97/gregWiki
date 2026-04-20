---
id: content-creation-custom-customers
title: Custom Customers
sidebar_label: Custom Customers
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
  "budget": 250000.0,
  "requirementRules": ["MinimumIOPS", "RequiredSpeed"],
  "ownershipRules": ["ccp.servertype.enterprise", "ccp.servertype.edge"]
}
```

## Assignment model

```csharp
namespace gregSdk.Definitions;

public class CustomerDefinition
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Segment { get; set; } = "SmallBusiness";
    public float Budget { get; set; }
    public string[] RequirementRules { get; set; } = System.Array.Empty<string>();
    public string[] OwnershipRules { get; set; } = System.Array.Empty<string>();
}
```

## Integration and registration

Use `GregCustomerRegistry` to register your custom customers. Runtime rules are evaluated by the `GregCustomerPolicyEngine`.

```csharp
using gregSdk;
using gregSdk.Definitions;
using gregSdk.Registries;

namespace CustomContentPack.Runtime;

public static class CustomerContentLoader
{
    public static void Load(CustomerDefinition myCustomer)
    {
        var registry = new GregCustomerRegistry();
        registry.Register(myCustomer);
    }
}
```

## Runtime policy evaluation

Hook into customer events and enforce assignment constraints using `GregCustomerPolicyEngine`:

```csharp
using gregSdk;
using gregSdk.Definitions;

namespace CustomContentPack.Runtime;

public static class CustomerRuntimePolicy
{
    public static void Install()
    {
        GregEventDispatcher.On("greg.SYSTEM.ButtonCustomerChosen", payload =>
        {
            // The policy engine can evaluate requirements and assignment feasibility.
            // string error;
            // GregCustomerPolicyEngine.EvaluateRequirement(customer, ruleId, payload, out error);
        }, "CustomContentPack");
    }
}
```

## Shop/placement strategy

Without a documented registry API:

1. Load customer definitions and register in `GregCustomerRegistry`.
2. Apply custom checks during relevant `greg.*` hooks using `GregCustomerPolicyEngine`.
3. Track missing native registration API in local `MISSING.md`.

Next: [Custom network items](/content-creation/custom-network-items).
