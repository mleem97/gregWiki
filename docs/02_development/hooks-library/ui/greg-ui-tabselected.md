---
title: greg.UI.TabSelected
sidebar_label: TabSelected
description: Canonical event hook for greg.UI.TabSelected (Normalized Unity Signal).
---

# greg.UI.TabSelected

This hook is triggered during the $fullHook event lifecycle. It is part of the normalized gregCore event pipeline.

## Payload Contract (GregSignalPayload)

- SourceAsm: Assembly name
- SourceType: Type name
- SourceMethod: Method name
- EntityId: Contextual ID of the affected entity
- TimestampUtc: Time of the event

## Example

````csharp
using gregSdk;

gregEventDispatcher.On(gregNativeEventHooks.UiTabSelected, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.UI.TabSelected triggered for {entityId}");
});
```
