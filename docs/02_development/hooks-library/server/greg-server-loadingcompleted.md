---
title: greg.SERVER.LoadingCompleted
sidebar_label: LoadingCompleted
description: Canonical event hook for greg.SERVER.LoadingCompleted (Normalized Unity Signal).
---

# greg.SERVER.LoadingCompleted

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

gregEventDispatcher.On(gregNativeEventHooks.ServerLoadingCompleted, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SERVER.LoadingCompleted triggered for {entityId}");
});
```
