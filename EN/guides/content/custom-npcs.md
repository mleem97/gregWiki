---
title: Custom NPCs & Employees
description: Create and manage your own staff and technicians
path: /guides/content/custom-npcs
---

# 👥 Custom NPCs & Employees

gregCore allows you to expand the game's workforce. You can add new employee types with specialized skills, custom salaries, and unique AI behaviors. 

## 🎭 Employee Definitions

Staff members are defined by the `EmployeeDefinition` class.

| Property | Type | Description |
| :--- | :--- | :--- |
| `StaffId` | \`string\` | Unique ID (e.g., \`greg.npc.security_guard\`). |
| `JobRole` | \`string\` | The role shown in the HR menu (e.g., "Sr. Network Architect"). |
| `BaseSalary` | \`float\` | Daily salary paid by the player. |
| `Efficiency` | \`float\` | Speed multiplier for tasks (1.0 = Default). |
| `SkillLevel` | \`int\` | 1 (Intern) to 5 (Master). Affects repair success rates. |

## 🚀 Creating an Employee (Lua Example)

Lua is perfect for defining new staff. Create a `.lua` file in your `Mods/` folder:

```lua
-- Define a Master Technician
local masterTech = {
    StaffId = "greg.npc.tech_god",
    JobRole = "Systems Deity",
    BaseSalary = 2500.0,
    Efficiency = 2.5,
    SkillLevel = 5
}

-- Register via gregCore
greg.npc.register_employee(masterTech)

-- Add a custom behavior hook
greg.on("greg.NPC.StartedTask", function(payload)
    if payload.StaffId == "greg.npc.tech_god" then
        greg.ui.show_notification("The Deity is working on: " .. payload.TaskName)
    end
end)
```

## 🧠 Behavior & State Hooks

Custom NPCs aren't just static data; you can control their logic using the **NPC Hook Family**:

- **[`greg.NPC.ArrivedAtWork`](/api/hooks/npc/arrived-at-work)**: Fired when the staff member spawns at the spawn point.
- **[`greg.NPC.StartedTask`](/api/hooks/npc/started-task)**: Fired when they begin a repair or cable job.
- **[`greg.NPC.TaskFailed`](/api/hooks/npc/task-failed)**: Triggered if their skill level is too low for the hardware complexity.
- **[`greg.NPC.QuitJob`](/api/hooks/npc/quit-job)**: Fired if happiness or salary conditions aren't met.

## 💼 The HR System Integration

Registered employees automatically appear in the game's **HR Terminal**. gregCore handles:
1.  **Hiring**: Deducting signup bonuses.
2.  **Payroll**: Automatic daily salary deduction.
3.  **UI Stats**: Displaying their custom role and efficiency in the staff list.

## 🛠️ Advanced: Custom Animations

If you are a C# developer, you can bind custom animation controllers to your NPCs:

```csharp
var securityGuard = new EmployeeDefinition { ... };
securityGuard.SetCustomAnimator("assets/bundles/security_anim.controller");
GregAPI.Npc.RegisterEmployee(securityGuard);
```

---

::: warning
**Performance**: Avoid running heavy pathfinding calculations inside the `NPC.Update` hook. Use gregCore's deferred execution system for expensive AI logic.
:::
