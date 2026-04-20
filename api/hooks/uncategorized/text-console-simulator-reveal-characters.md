---
title: TextConsoleSimulator.RevealCharacters
description: Hook event for TextConsoleSimulator.RevealCharacters
path: /api/hooks/uncategorized/text-console-simulator-reveal-characters
---

# TextConsoleSimulator.RevealCharacters

> **Hook ID:** `greg.uncategorized.textconsolesimulator.revealcharacters`
> **Category:** Uncategorized
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TextConsoleSimulator.RevealCharacters()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator RevealCharacters(TMP_Text textComponent)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `textComponent` | `TMP_Text` | ... |


## Using this Hook

::: tip
Use this hook to react to `RevealCharacters` events in `TextConsoleSimulator`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.textconsolesimulator.revealcharacters", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.textconsolesimulator.revealcharacters", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.textconsolesimulator.revealcharacters")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.textconsolesimulator.revealcharacters", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.textconsolesimulator.revealcharacters", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.textconsolesimulator.revealcharacters", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
