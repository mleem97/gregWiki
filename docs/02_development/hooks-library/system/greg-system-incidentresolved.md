---
title: greg.SYSTEM.IncidentResolved
sidebar_label: IncidentResolved
description: Canonical event hook for greg.SYSTEM.IncidentResolved (Normalized Unity Signal).
---

# greg.SYSTEM.IncidentResolved

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

gregEventDispatcher.On(gregNativeEventHooks.SystemIncidentResolved, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.IncidentResolved triggered for {entityId}");
});
```