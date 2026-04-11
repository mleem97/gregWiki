---
id: content-creation-custom-employees
title: Custom Employees
sidebar_label: Custom Employees
slug: /development/content-creation/custom-employees
description: Build custom employee classes and profiles with skills, costs, availability, specialization, and optional visual mapping.
---

**Layer ownership:** employee profile data in **Mod Layer**; assignment/event behavior in **Core SDK layer**.

## Capability split

- **Already possible:** custom profile definitions and policy logic reacting to employee events.
- **Needs FrameworkExtension:** first-class employee class registry.
- **Currently missing:** documented API for direct native hire-pool injection of custom employee classes.

## Employee profile

Create `Content/Employees/FieldNetworkSpecialist.json`:

```json
{
  "id": "ccp.employee.field_network_specialist",
  "displayName": "Field Network Specialist",
  "skills": {
    "networking": 9,
    "hardwareRepair": 7,
    "customerSupport": 5
  },
  "dailyCost": 950,
  "availability": {
    "startDay": 5,
    "requiresReputation": 22
  },
  "specialization": "NetworkOperations",
  "model": "Models/Shared/FieldNetworkSpecialist.prefab"
}
```

## Runtime policy sample

```csharp
using gregFramework.Core;

namespace CustomContentPack.Runtime;

public static class EmployeePolicyRuntime
{
    public static void Install()
    {
        GregEventDispatcher.On("greg.SYSTEM.ButtonConfirmHire", payload =>
        {
            // Validate budget, reputation, and specialization constraints.
        }, "CustomContentPack");

        GregEventDispatcher.On("greg.SYSTEM.ButtonConfirmFireEmployee", payload =>
        {
            // Optional bookkeeping for custom class metrics.
        }, "CustomContentPack");
    }
}
```

## Framework extension candidate

```csharp
// Placeholder only: API not documented in current wiki.
// GregContentRegistry.RegisterEmployeeClass(EmployeeDefinition definition);
```

If native integration is required, track it in local `Docs/MISSING.md`.

Next: [Custom furniture](/wiki/development/content-creation/custom-furniture).
