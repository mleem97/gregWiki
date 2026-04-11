---
title: greg.UI.Cancel
sidebar_label: Cancel
description: Canonical event hook for greg.UI.Cancel (Normalized Unity Signal).
---

# greg.UI.Cancel

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

gregEventDispatcher.On(gregNativeEventHooks.UiCancel, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.UI.Cancel triggered for {entityId}");
});
``
