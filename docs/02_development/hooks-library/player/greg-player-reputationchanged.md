---
title: greg.PLAYER.ReputationChanged
sidebar_label: ReputationChanged
description: Canonical event hook for greg.PLAYER.ReputationChanged (Normalized Unity Signal).
---

# greg.PLAYER.ReputationChanged

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

gregEventDispatcher.On(gregNativeEventHooks.PlayerReputationChanged, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.PLAYER.ReputationChanged triggered for {entityId}");
});
```