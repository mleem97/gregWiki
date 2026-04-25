# Config Service API

Runtime configuration management for gregCore mods.

## Interface

```csharp
public interface IGregConfigService
{
    T Get<T>(string key, T defaultValue);
    void Set<T>(string key, T value);
    void Save();
    void Reload();
    event EventHandler<string> OnChanged;
}
```

## Usage

```csharp
var config = GregServiceContainer.Get<IGregConfigService>();

// Get value with default
var value = config.Get("mod.setting", defaultValue);

// Set value
config.Set("mod.setting", newValue);
config.Save();

// Listen for changes
config.OnChanged += (sender, key) => { /* reload */ };
```

## Storage

Configs are stored in:
- `<Game>/MelonLoader/configs/gregCore/`

## Best Practices

1. Use sensible defaults
2. Validate on load
3. Save only when needed
4. Use typed getters