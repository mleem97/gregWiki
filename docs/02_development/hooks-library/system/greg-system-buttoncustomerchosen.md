---
title: greg.SYSTEM.ButtonCustomerChosen
sidebar_label: ButtonCustomerChosen
description: Canonical event hook for greg.SYSTEM.ButtonCustomerChosen (Normalized Unity Signal).
---

# greg.SYSTEM.ButtonCustomerChosen

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

gregEventDispatcher.On(gregNativeEventHooks.SystemButtonCustomerChosen, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.ButtonCustomerChosen triggered for {entityId}");
});
```
