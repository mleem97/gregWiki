---
title: greg.UI.PauseClosed
sidebar_label: PauseClosed
description: Fired when the pause menu is closed. (Normalized Unity Signal)
---

# greg.UI.PauseClosed

Triggered when the player closes the pause menu and returns to the game.

## Example

```csharp
using gregSdk;

gregEventDispatcher.On(gregNativeEventHooks.UiPauseClosed, payload => {
    // Game is resumed
});
```
