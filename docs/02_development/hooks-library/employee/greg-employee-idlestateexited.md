---
title: greg.EMPLOYEE.IdleStateExited
sidebar_label: IdleStateExited
description: Canonical event hook for greg.EMPLOYEE.IdleStateExited (Normalized Unity Signal).
---

# greg.EMPLOYEE.IdleStateExited

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

gregEventDispatcher.On(gregNativeEventHooks.EmployeeIdleStateExited, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.EMPLOYEE.IdleStateExited triggered for {entityId}");
});
```