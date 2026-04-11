---
title: greg.SERVER.LoadingStarted
sidebar_label: LoadingStarted
description: Canonical event hook for greg.SERVER.LoadingStarted (Normalized Unity Signal).
---

# greg.SERVER.LoadingStarted

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

gregEventDispatcher.On(gregNativeEventHooks.ServerLoadingStarted, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SERVER.LoadingStarted triggered for {entityId}");
});
``
