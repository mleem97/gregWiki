---
title: Custom Job and Order Types
description: Learn how to define new work systems and contract types
path: /guides/content/custom-jobs
---

# 🛠️ Custom Job and Order Types

Custom Jobs allow you to expand the gameplay loop of *Data Center* by introducing new tasks for the player and their employees. Whether it's a one-time repair job, a multi-stage migration project, or a continuous maintenance contract, gregCore provides the infrastructure to manage these tasks.

---

## 1. What is a Job?

A **Job** (or **Order**) is a structured unit of work that has:
- **Triggers**: Condition for the job to appear (e.g., player level, time of day).
- **Objectives**: Specific tasks that must be finished (e.g., "Install 5 SSDs").
- **Rewards**: Money, reputation, or unlocked hardware.
- **Fail Conditions**: Exceeding a time limit or breaking hardware.

## 2. Registering a Job Type

To define a new category of work, use `GregAPI.Workflow.RegisterJobType()`.

```csharp
var jobType = new gregCore.Models.JobTypeDef {
    JobTypeId = "greg.emergency_repair",
    DisplayName = "Emergency Hardware Repair",
    Description = "High-priority hardware failures demanding immediate attention.",
    Difficulty = 4,
    RewardMultiplier = 2.5f
};

GregAPI.Workflow.RegisterJobType(jobType);
```

---

## 3. Creating and Posting an Order

Orders are specific instances of a Job Type that appear on the player's dashboard.

```csharp
var myOrder = new OrderRequest {
    OrderId = "repair_rack_f5",
    JobTypeId = "greg.emergency_repair",
    Location = "Rack Sector F5",
    Objective = "Replace 3 failed power supplies",
    Reward = 5000.0,
    DurationHours = 4
};

GregAPI.Workflow.PostOrder(myOrder);
```

---

## 4. Hooking into Job Lifecycle

Tracking progress is managed via lifecycle hooks. You can update the UI or trigger sounds when a job status changes.

### 🏁 Job Accepted
#Tabset
#Tab: C#
```csharp
GregAPI.Events.Subscribe("greg.workflow.JobAccepted", (payload) => {
    string orderId = payload.GetString("OrderId");
    GregLogger.Info($"Player is now working on {orderId}");
});
```
#Tab: Lua
```lua
greg.on("greg.workflow.JobAccepted", function(payload)
    greg.log_info("Task started: " .. payload.OrderId)
end)
```
#EndTabset

### ✅ Objective Updated
Use this to show a "Progress: 1/5" type notification.

```lua
greg.on("greg.workflow.ObjectiveUpdated", function(payload)
    local count = payload.CurrentCount
    local total = payload.TargetCount
    greg.show_notification("Progress: " .. count .. "/" .. total)
end)
```

---

## 5. Persistence and State

Jobs in progress must survive a game restart. gregCore automatically handles the registration of active orders, but if you have **Custom Objectives** (e.g., "Decrypting a leaked file"), you must save the sub-state yourself.

```csharp
// Saving custom progress
GregAPI.Persistence.SaveData($"job_{orderId}_decryption_percent", 45);
```

## Common Mistakes ⚠️

- **Vague Objectives**: If an objective is "Internal logic check", the player won't know what to do. Always provide clear, actionable strings.
- **Impossible Deadlines**: Setting a `DurationHours` of 0.1 for a task requiring travel across the office will frustrate players.
- **Duplicate IDs**: Ensure every `OrderId` is unique (e.g., by appending a timestamp or UUID).

---

## 📖 Related Links
*   [**Custom Customers Guide**](/guides/content/custom-customers)
*   [**Workflow Service API**](/api/services/workflow)
*   [**All Workflow Hooks**](/api/hooks/workflow)
