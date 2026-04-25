# Logger API

The gregCore logging system provides structured logging with category support and runtime log level control.

## Usage

```csharp
using gregCore.Logging;

// Basic logging
GregLogger.Log("Message");
GregLogger.Warn("Warning");
GregLogger.Error("Error");

// Category logging
GregLogger.Category("UI").Log("UI Event");
GregLogger.Category("Network").Log("Network Event");
```

## Log Levels

| Level | Method | Description |
|-------|--------|-------------|
| Debug | `LogDebug()` | Verbose debug info |
| Info | `Log()` | General information |
| Warning | `Warn()` | Non-critical issues |
| Error | `Error()` | Critical errors |

## Configuration

Configure via `greg preferences.json`:

```json
{
  "Logging": {
    "Level": "Info",
    "Categories": {
      "UI": "Debug",
      "Network": "Warning"
    }
  }
}
```

## Categories

- `Core` - Core framework events
- `UI` - User interface events
- `Network` - Network operations
- `Persistence` - Save/load operations
- `Hooks` - Hook invocations

## Best Practices

1. Use appropriate log levels
2. Include context (class/method names)
3. Avoid logging in hot paths
4. Use categories for filtering