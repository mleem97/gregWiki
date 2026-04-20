---
title: TextConsoleSimulator.RevealWords
description: Hook event for TextConsoleSimulator.RevealWords
path: /api/hooks/uncategorized/text-console-simulator-reveal-words
---

# TextConsoleSimulator.RevealWords

> **Hook ID:** `greg.uncategorized.textconsolesimulator.revealwords`
> **Category:** Uncategorized
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TextConsoleSimulator.RevealWords()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator RevealWords(TMP_Text textComponent)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `textComponent` | `TMP_Text` | ... |


## Using this Hook

::: tip
Use this hook to react to `RevealWords` events in `TextConsoleSimulator`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.textconsolesimulator.revealwords", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.textconsolesimulator.revealwords", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.textconsolesimulator.revealwords")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.textconsolesimulator.revealwords", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.textconsolesimulator.revealwords", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.textconsolesimulator.revealwords", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
