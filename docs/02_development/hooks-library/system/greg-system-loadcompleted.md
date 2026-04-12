---
title: greg.SYSTEM.LoadCompleted
sidebar_label: LoadCompleted
description: Canonical event hook for greg.SYSTEM.LoadCompleted (Normalized Unity Signal).
---

# greg.SYSTEM.LoadCompleted

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

gregEventDispatcher.On(gregNativeEventHooks.SystemLoadCompleted, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.LoadCompleted triggered for {entityId}");
});
```
