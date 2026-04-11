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
  "role": "Field Network Specialist",
  "baseSalary": 950.0,
  "skillLevel": 9,
  "specialization": "NetworkOperations",
  "isAvailable": true,
  "visualPrefabId": "Models/Shared/FieldNetworkSpecialist.prefab"
}
```

## C# model

```csharp
namespace gregSdk.Definitions;

public class EmployeeDefinition
{
    public string Id { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public float BaseSalary { get; set; }
    public int SkillLevel { get; set; }
    public string Specialization { get; set; } = "Generalist";
    public bool IsAvailable { get; set; } = true;
    public string VisualPrefabId { get; set; }
}
```

## Integration and registration

Use `GregEmployeeRegistry` to register your custom employee definitions.

```csharp
using gregSdk;
using gregSdk.Definitions;
using gregSdk.Registries;

namespace CustomContentPack.Runtime;

public static class EmployeeContentLoader
{
    public static void Load(EmployeeDefinition myEmployee)
    {
        var registry = new GregEmployeeRegistry();
        registry.Register(myEmployee);
    }
}
```

## AI Bridge and runtime behavior

Use `GregEmployeeAIBridge` to control employee animations and states dynamically based on custom specialization logic.

```csharp
using gregSdk;
using gregSdk.Services;

namespace CustomContentPack.Runtime;

public static class EmployeePolicyRuntime
{
    public static void Install()
    {
        GregEventDispatcher.On("greg.SYSTEM.ButtonConfirmHire", payload =>
        {
            // Trigger custom AI behaviors via the bridge
            // GregEmployeeAIBridge.ForceStateTransition(employeeId, "Hired");
        }, "CustomContentPack");
    }
}
```

## Shop/placement strategy

Without a documented registry API:

1. Load employee definitions and register in `GregEmployeeRegistry`.
2. Use `GregEmployeeAIBridge` for advanced runtime behavior.
3. Track missing native registration API in local `MISSING.md`.

Next: [Custom furniture](/wiki/development/content-creation/custom-furniture).
