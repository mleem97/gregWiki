---
title: greg.CUSTOMER.MoneyUpdated
sidebar_label: MoneyUpdated
description: Canonical event hook for greg.CUSTOMER.MoneyUpdated (Normalized Unity Signal).
---

# greg.CUSTOMER.MoneyUpdated

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

gregEventDispatcher.On(gregNativeEventHooks.CustomerMoneyUpdated, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.CUSTOMER.MoneyUpdated triggered for {entityId}");
});
```