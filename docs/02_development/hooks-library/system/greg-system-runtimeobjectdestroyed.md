---
title: greg.SYSTEM.RuntimeObjectDestroyed
sidebar_label: RuntimeObjectDestroyed
description: Canonical event hook for greg.SYSTEM.RuntimeObjectDestroyed (Normalized Unity Signal).
---

# greg.SYSTEM.RuntimeObjectDestroyed

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

gregEventDispatcher.On(gregNativeEventHooks.SystemRuntimeObjectDestroyed, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.RuntimeObjectDestroyed triggered for {entityId}");
});
```
