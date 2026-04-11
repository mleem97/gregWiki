---
title: greg.Content.Loaded
sidebar_label: greg.Content.Loaded
description: "gregCore Hook — Normalized Unity signal for content being loaded."
---

# `greg.Content.Loaded`

## Description

- Normalized Unity signal for content being loaded.

## How to use this hook

### C# Snippet (using `gregSdk`)

```csharp
using gregSdk;

GregEventDispatcher.On("greg.Content.Loaded", payload =>
{
    // Handle content loaded event
});
```
