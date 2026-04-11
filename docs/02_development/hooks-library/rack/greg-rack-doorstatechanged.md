---
title: greg.RACK.DoorStateChanged
sidebar_label: DoorStateChanged
description: Canonical event hook for greg.RACK.DoorStateChanged (Normalized Unity Signal).
---

# greg.RACK.DoorStateChanged

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

gregEventDispatcher.On(gregNativeEventHooks.RackDoorStateChanged, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.RACK.DoorStateChanged triggered for {entityId}");
});
``
