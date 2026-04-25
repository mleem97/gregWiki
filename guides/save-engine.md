# Save Engine

Persistent data storage with versioning and migration support.

## Features

- Automatic save/load
- Schema versioning
- Data migration
- Lazy saving
- Save scheduling

## Usage

```csharp
using gregCore.SaveEngine;

// Register data contract
GregSaveScheduler.RegisterData<MyData>("myMod", version: 1);

// Save data
var data = new MyData { Value = 42 };
GregSaveEngine.Save("myMod", data);

// Load data
var loaded = GregSaveEngine.Load<MyData>("myMod");
```

## Version Migration

```csharp
// Upgrade from v1 to v2
GregSaveScheduler.RegisterMigration<MyData>(
    fromVersion: 1,
    toVersion: 2,
    migrate: data => { /* transform data */ }
);
```

## Save Events

```csharp
GregSaveNotifier.OnSaveCompleted += (sender, e) => { /* notified */ };
GregSaveNotifier.OnLoadCompleted += (sender, e) => { /* notified */ };
```

## Configuration

```json
{
  "SaveEngine": {
    "AutoSave": true,
    "Interval": 300,
    "MaxBackups": 5
  }
}
```

## Best Practices

1. Use versioning from start
2. Implement migrations
3. Validate loaded data
4. Handle corruption gracefully