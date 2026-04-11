---
title: greg.SYSTEM.RuntimeObjectLoaded
sidebar_label: RuntimeObjectLoaded
description: Canonical event hook for greg.SYSTEM.RuntimeObjectLoaded (Normalized Unity Signal).
---

# greg.SYSTEM.RuntimeObjectLoaded

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

gregEventDispatcher.On(gregNativeEventHooks.SystemRuntimeObjectLoaded, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.RuntimeObjectLoaded triggered for {entityId}");
});
```