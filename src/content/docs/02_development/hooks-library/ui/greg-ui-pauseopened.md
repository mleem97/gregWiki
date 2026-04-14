---
title: greg.UI.PauseOpened
sidebar_label: PauseOpened
description: Fired when the pause menu is opened. (Normalized Unity Signal)
---

# greg.UI.PauseOpened

Triggered when the player opens the game's pause menu.

## Example

```csharp
using gregSdk;

gregEventDispatcher.On(gregNativeEventHooks.UiPauseOpened, payload => {
    // Game is paused
});
```
