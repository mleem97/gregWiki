---
title: greg.Content.Registered
sidebar_label: greg.Content.Registered
description: "gregCore Hook — Normalized Unity signal for content being registered."
---

# `greg.Content.Registered`

## Description

- Normalized Unity signal for content being registered.

## How to use this hook

### C# Snippet (using `gregSdk`)

```csharp
using gregSdk;

GregEventDispatcher.On("greg.Content.Registered", payload =>
{
    // Handle content registered event
});
```
