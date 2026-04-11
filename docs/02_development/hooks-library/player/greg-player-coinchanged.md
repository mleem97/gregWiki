---
title: greg.PLAYER.CoinChanged
sidebar_label: CoinChanged
description: Canonical event hook for greg.PLAYER.CoinChanged (Normalized Unity Signal).
---

# greg.PLAYER.CoinChanged

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

gregEventDispatcher.On(gregNativeEventHooks.PlayerCoinChanged, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.PLAYER.CoinChanged triggered for {entityId}");
});
``
