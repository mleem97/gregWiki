---
title: greg.SERVER.ServerInsertedInRack
sidebar_label: ServerInsertedInRack
description: Canonical event hook for greg.SERVER.ServerInsertedInRack (Normalized Unity Signal).
---

# greg.SERVER.ServerInsertedInRack

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

gregEventDispatcher.On(gregNativeEventHooks.ServerInsertedInRack, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SERVER.ServerInsertedInRack triggered for {entityId}");
});
``
