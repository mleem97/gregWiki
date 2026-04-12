---
title: greg.SYSTEM.SnapshotSaved
sidebar_label: SnapshotSaved
description: Canonical event hook for greg.SYSTEM.SnapshotSaved (Normalized Unity Signal).
---

# greg.SYSTEM.SnapshotSaved

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

gregEventDispatcher.On(gregNativeEventHooks.SystemSnapshotSaved, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.SnapshotSaved triggered for {entityId}");
});
```
