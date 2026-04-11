---
title: greg.EMPLOYEE.AnimationStateChanged
sidebar_label: AnimationStateChanged
description: Canonical event hook for greg.EMPLOYEE.AnimationStateChanged (Normalized Unity Signal).
---

# greg.EMPLOYEE.AnimationStateChanged

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

gregEventDispatcher.On(gregNativeEventHooks.EmployeeAnimationStateChanged, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.EMPLOYEE.AnimationStateChanged triggered for {entityId}");
});
``
