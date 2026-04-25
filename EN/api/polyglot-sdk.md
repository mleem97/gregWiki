# Polyglot SDK Reference (v1.0.0.35)

The gregCore framework is designed to be accessible from any language supported by MelonLoader. The central bridge is the greg.Sdk.GregPublicAPI.

## Supported Languages
- C#
- Lua (MoonSharp)
- Python (Python.NET)
- Rust (FFI)
- JavaScript (Jint)

## Central Bridge (GregPublicAPI)

This class acts as the simplified entrance for all languages.

### Methods
- ShowNotification(title, msg)
- OpenAllWalls()
- GetCoins()
- CreateTablet(title, buildFn)

## Event Bus Binding
Modders should use the GameEventBus to react to game data changes instead of polling in Update().
