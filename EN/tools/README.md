# Debugging and Testing

Modding is 10% coding and 90% debugging. gregCore provides tools to make the 90% easier.

## 1. The Developer Console

Press `~` (tilde) in-game to open the gregCore Dev Console. Here you can:
-   See real-time logs (colored by severity).
-   Filter logs by Mod ID.
-   Execute small snippets of code (if enabled).

## 2. Hook Tracing

If your hook isn't firing, enable Hook Tracing in `gregCore.json`:

```json
{
  "EnableHookTracing": true
}
```

This will log every single hook fired in the framework to the console.

## 3. Log Levels

Use the appropriate log level to avoid cluttering the console:
-   `Logger.Info`: General information.
-   `Logger.Debug`: Only shown if `DebugMode` is on.
-   `Logger.Warning`: Something unexpected but non-fatal happened.
-   `Logger.Error`: A fatal error occurred in your mod.

## 4. Common Failures

-   **Mod not loading**: Check `MelonLoader/Latest.log`. Is there a version mismatch?
-   **Hook not firing**: Is the game method actually being called? Use `SafePatch` logs to verify.
-   **Bridge Error**: (Python/Lua) Check if the runtime DLLs are in the correct path.

---
[Next: API Reference](../08-api-reference/README.md)
