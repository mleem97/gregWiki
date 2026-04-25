# NPCs and Employees: Behavior & Logic

Adding custom employees to *Data Center* allows you to introduce new worker roles, unique efficiency traits, and specialized behavior trees.

## 1. The Employee Data Model
An employee is defined by their skill set, cost, and visual appearance.

### Core Traits
| Field | Type | Description |
| :--- | :--- | :--- |
| `Id` | string | Unique worker type ID. |
| `Role` | Enum | `Technician`, `Support`, `Security`, `Manager`. |
| `Efficiency` | float | Speed multiplier for tasks (1.0 = standard). |
| `Salary` | int | Daily cost to the player. |
| `SkillLevel` | int | Affects failure rates and complex task handling. |
| `CustomSkin` | string | Path to a texture or model override. |

## 2. Defining Behavior
Unlike static objects, employees have **States**. gregCore allows you to hook into these state transitions.

### Common States
- `Idle`: Waiting for a task.
- `Moving`: Traveling to a rack or workstation.
- `Working`: Performing a repair or installation.
- `Resting`: On break.

## 3. Registration Workflow (C#)

```csharp
public override void OnLoad()
{
    var masterTech = new EmployeeConfig {
        Id = "greg.expert.tech",
        DisplayName = "Expert Technician",
        Role = EmployeeRole.Technician,
        Efficiency = 1.8f,
        DailySalary = 450,
        SkillLevel = 10
    };

    Api.Npc.RegisterEmployeeType(masterTech);
}
```

## 4. Custom Task Logic
You can assign custom tasks to employees using the `Api.Npc` service.

### Example: Dispatch to a specific rack
```csharp
var worker = Api.Npc.GetAvailableWorker(EmployeeRole.Technician);
if (worker != null) {
    Api.Npc.AssignTask(worker, new RepairTask {
        TargetId = "rack_04_server_02",
        Priority = TaskPriority.High
    });
}
```

## 5. Interaction Hooks
React to what your employees are doing in the world.

```csharp
Api.Hooks.On("greg.npc.TaskCompleted", payload => {
    var workerId = payload.Data["workerId"];
    var result = payload.Data["success"];
    Logger.Info($"Worker {workerId} finished task. Success: {result}");
});
```

## 6. Hiring & The Job Market
Custom employees will automatically appear in the game's "Hiring" UI if they are registered correctly. You can control the spawn weight to make certain experts rarer than others.

---
[Back to Content Creation](README.md)
