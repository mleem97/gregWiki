---
title: greg.WORLD.CollisionEntered
sidebar_label: CollisionEntered
description: Canonical event hook for greg.WORLD.CollisionEntered (Normalized Unity Signal).
---

# greg.WORLD.CollisionEntered

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

gregEventDispatcher.On(gregNativeEventHooks.WorldCollisionEntered, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.WORLD.CollisionEntered triggered for {entityId}");
});
```