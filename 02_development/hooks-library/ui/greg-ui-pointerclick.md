---
title: greg.UI.PointerClick
sidebar_label: PointerClick
description: Fired when a UI element is clicked. (Normalized Unity Signal)
---

# greg.UI.PointerClick

This hook is triggered when a user clicks on a supported UI component.

## Payload

- `EntityId`: Name of the UI element.
- `TimestampUtc`: Time of the event.

## Example

```csharp
using gregSdk;

gregEventDispatcher.On(gregNativeEventHooks.UiPointerClick, payload => {
    var uiName = gregPayload.Get<string>(payload, "EntityId");
    // Handle click
});
```
