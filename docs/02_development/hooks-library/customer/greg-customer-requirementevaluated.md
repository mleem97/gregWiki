---
title: greg.CUSTOMER.RequirementEvaluated
sidebar_label: RequirementEvaluated
description: Canonical event hook for greg.CUSTOMER.RequirementEvaluated (Normalized Unity Signal).
---

# greg.CUSTOMER.RequirementEvaluated

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

gregEventDispatcher.On(gregNativeEventHooks.CustomerRequirementEvaluated, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.CUSTOMER.RequirementEvaluated triggered for {entityId}");
});
```
