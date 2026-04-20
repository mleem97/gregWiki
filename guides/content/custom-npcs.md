---
title: Custom NPCs and Employees
description: Learn how to add new staff types and behavior to your Data Center
path: /guides/content/custom-npcs
---

# 👥 Custom NPCs and Employees

Adding custom staff members allows you to automate specialized tasks, provide new services to the player, or simply add flavor to your office. gregCore provides a high-level API to define NPC types, their visual models, and their AI logic.

---

## 1. NPC vs. Employee

In gregCore, we distinguish between two types of humanoids:
- **Employees**: Can be hired via the recruitment menu, have salaries, and can be assigned to tasks (e.g., Technicians, Cleaners).
- **NPCs**: Static or path-following characters that interact with the world (e.g., quest givers, one-time contractors, or decorative office workers).

## 2. Registering a Custom Employee Type

To add a new job type to the recruitment office, use `GregAPI.Npc.RegisterEmployeeType()`.

```csharp
var jobDef = new gregCore.Models.EmployeeTypeDef {
    JobId = "greg.hardware_specialist",
    DisplayName = "Hardware Specialist",
    BaseSalary = 4500.0,
    Skills = new string[] { "Maintenance", "Networking" },
    DefaultPrefab = "greg/assets/npcs/specialist_m.bundle"
};

GregAPI.Npc.RegisterEmployeeType(jobDef);
```

Once registered, the game will automatically include this job type in the hiring pool.

---

## 3. Scripting NPC Behavior (Logic)

NPC behavior is managed through **Action Stacks**. You can push commands to an NPC's AI to make them interact with the world.

### Basic Commands (Lua Example)
```lua
function on_init()
    local myNpc = greg.npc.spawn("myMod.contractor", greg.world.get_player_pos())
    
    -- Command the NPC to move to the server room
    greg.npc.walk_to(myNpc, { x = 10, y = 0, z = -5 })
    
    -- Then interact with a specific object
    greg.npc.interact(myNpc, "server_rack_01")
end
```

### Listening to AI Hooks
gregCore provides hooks for when an NPC reaches a destination or fails a task.

#Tabset
#Tab: C#
```csharp
GregAPI.Events.Subscribe("greg.npc.TaskCompleted", (payload) => {
    string npcId = payload.GetString("NpcId");
    string taskId = payload.GetString("TaskId");
    
    GregLogger.Info($"NPC {npcId} successfully finished {taskId}!");
});
```
#Tab: Lua
```lua
greg.on("greg.npc.TaskCompleted", function(payload)
    greg.log_info("NPC " .. payload.NpcId .. " is done with " .. payload.TaskId)
end)
```
#EndTabset

---

## 4. Custom Animations and State

If your NPC uses a custom `AnimatorController`, you can trigger parameters via gregCore to synchronize their visual state with their current logic.

```csharp
// Trigger a custom animation state in the Unity Animator
GregAPI.Npc.SetAnimationTrigger(npcUid, "Repairing");

// Set a float parameter (e.g., Mood)
GregAPI.Npc.SetAnimationFloat(npcUid, "Happiness", 0.8f);
```

---

## 5. Persistence (Hiring State)

Employees hired via your custom type are automatically saved into the game's native save system. However, if you add **Custom Stats** (e.g., "Experience Points"), you must save them manually using the Persistence Service.

```csharp
// Saving employee XP
GregAPI.Persistence.SaveData($"employee_{uid}_xp", 1500);
```

## Common Mistakes ⚠️

- **NavMesh Collisions**: If your NPC gets stuck running in place, ensure your office's NavMesh is baked correctly and that the NPC's collider isn't overlapping with static obstacles.
- **Salaries**: Setting a `BaseSalary` to 0 may cause division errors in some accounting logic. Always provide a non-zero value.
- **Animator Parameters**: Ensure the names used in `SetAnimationTrigger` exactly match the parameter strings in your Unity Animator asset.

---

## 📖 Related Links
*   [**All NPC Hooks**](/api/hooks/npc)
*   [**Employee Management Service**](/api/services/npc)
*   [**Building Custom Jobs**](/guides/content/custom-jobs)
