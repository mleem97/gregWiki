---
title: greg.SYSTEM.oveSpawnedItemRemoved
sidebar_label: oveSpawnedItemRemoved
description: Canonical event hook for greg.SYSTEM.oveSpawnedItemRemoved (Normalized Unity Signal).
---

# greg.SYSTEM.oveSpawnedItemRemoved

This hook is triggered during the $fullHook event lifecycle. It is part of the normalized gregCore event pipeline.

## Payload Contract (GregSignalPayload)
- SourceAsm: Assembly name
- SourceType: Type name
- SourceMethod: Method name
- EntityId: Contextual ID of the affected entity
- TimestampUtc: Time of the event

## Example
``csharp
using gregSdk;

gregEventDispatcher.On(gregNativeEventHooks.SystemSpawnedItemRemoved, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.oveSpawnedItemRemoved triggered for {entityId}");
});
``
