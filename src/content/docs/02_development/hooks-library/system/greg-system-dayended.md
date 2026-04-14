---
title: greg.SYSTEM.DayEnded
sidebar_label: DayEnded
description: Canonical event hook for greg.SYSTEM.DayEnded (Normalized Unity Signal).
---

# greg.SYSTEM.DayEnded

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

gregEventDispatcher.On(gregNativeEventHooks.SystemDayEnded, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.DayEnded triggered for {entityId}");
});
```
