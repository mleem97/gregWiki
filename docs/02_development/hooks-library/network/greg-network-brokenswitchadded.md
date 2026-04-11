---
title: greg.NETWORK.BrokenSwitchAdded
sidebar_label: BrokenSwitchAdded
description: Canonical event hook for greg.NETWORK.BrokenSwitchAdded (Normalized Unity Signal).
---

# greg.NETWORK.BrokenSwitchAdded

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

gregEventDispatcher.On(gregNativeEventHooks.NetworkBrokenSwitchAdded, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.NETWORK.BrokenSwitchAdded triggered for {entityId}");
});
``
