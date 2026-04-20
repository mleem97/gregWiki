---
title: greg.SYSTEM.RuntimeObjectEnabled
sidebar_label: RuntimeObjectEnabled
description: Canonical event hook for greg.SYSTEM.RuntimeObjectEnabled (Normalized Unity Signal).
---

# greg.SYSTEM.RuntimeObjectEnabled

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

gregEventDispatcher.On(gregNativeEventHooks.SystemRuntimeObjectEnabled, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.RuntimeObjectEnabled triggered for {entityId}");
});
```
