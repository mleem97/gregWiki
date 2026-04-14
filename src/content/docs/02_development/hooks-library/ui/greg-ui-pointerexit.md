---
title: greg.UI.PointerExit
sidebar_label: PointerExit
description: Fired when the mouse pointer leaves a UI element. (Normalized Unity Signal)
---

# greg.UI.PointerExit

This hook is triggered whenever the mouse cursor leaves the boundaries of a supported UI element.

## Payload

- `EntityId`: Name of the UI element.
- `TimestampUtc`: Time of the event.

## Example

```csharp
using gregSdk;

gregEventDispatcher.On(gregNativeEventHooks.UiPointerExit, payload => {
    var uiName = gregPayload.Get<string>(payload, "EntityId");
    // Handle pointer exit
});
```
