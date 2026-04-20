---
title: greg.WORLD.TriggerEntered
sidebar_label: TriggerEntered
description: Canonical event hook for greg.WORLD.TriggerEntered (Normalized Unity Signal).
---

# greg.WORLD.TriggerEntered

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

gregEventDispatcher.On(gregNativeEventHooks.WorldTriggerEntered, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.WORLD.TriggerEntered triggered for {entityId}");
});
```
