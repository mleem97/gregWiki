---
title: greg.Input.BindingStarted
sidebar_label: BindingStarted
description: "gregCore Hook — Normalized Unity signal for an input binding process starting."
---

# `greg.Input.BindingStarted`

## Description

- Normalized Unity signal for an input binding process starting.

## How to use this hook

### C# Snippet (using `gregSdk`)

```csharp
using gregSdk;

GregEventDispatcher.On("greg.Input.BindingStarted", payload =>
{
    // Handle input binding started event
});
```
