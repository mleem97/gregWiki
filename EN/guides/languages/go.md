---
title: Modding with Go
description: Lightweight, concurrent modding using the C-Shared bridge
path: /guides/languages/go
---

# 🐹 Modding with Go

Go (Golang) is supported in gregCore for developers who want a balance between high-level ease of use and low-level performance, particularly for background tasks and networking. gregCore bridges to Go modules compiled as C-shared libraries.

---

## 🛠️ Setup & Requirements

1.  **Go Compiler**: Install the Go toolchain from [go.dev](https://go.dev/).
2.  **CGO Enabled**: You must have `CGO_ENABLED=1` and a GCC compiler installed (e.g., MinGW-w64 on Windows).

## 🏗️ Project Structure

A Go mod is written as a `main` package that exports functions via `//export`.

```text
my-go-mod/
  go.mod
  main.go
```

### Building the Mod
You must compile the mod as a C-shared library:

```bash
go build -buildmode=c-shared -o my_mod.dll main.go
```

---

## 🏗️ The Entry Point

Your `main.go` must export a `GregInit` function. gregCore provides a header/package to simplify the binding.

```go
package main

import "C"
import "fmt"
import "gregCore/sdk" // Local SDK package

//export GregInit
func GregInit() {
    sdk.LogInfo("Go Mod: Systems initialized.")
    
    // Subscribe to a hook
    sdk.Subscribe("greg.hardware.ServerPowered", onServerPowered)
}

func onServerPowered(payload sdk.EventPayload) {
    id := payload.GetString("InternalId")
    msg := fmt.Sprintf("Server %s is now powered - detected by Go!", id)
    sdk.LogInfo(msg)
}

func main() {} // Required but unused
```

---

## 🪝 Using Hooks and Services

The Go bridge uses a **Callback Dispatcher** to ensure that Go functions can safely be called from the game's .NET threads.

### Example: Background Monitoring
Go shines in background processing. You can use Goroutines to monitor game states without blocking the main render thread.

```go
//export GregInit
func GregInit() {
    go monitorEconomy()
}

func monitorEconomy() {
    for {
        time.Sleep(10 * time.Second)
        balance := sdk.Economy.GetBalance()
        if balance < 1000 {
           sdk.ShowNotification("Low balance warning from Go background task!")
        }
    }
}
```

---

## 🛡️ Best Practices

*   **Memory Pointers**: Be careful when passing pointers between Go and C. Use the types provided in the `sdk` package to ensure memory is pinned correctly.
*   **Panic Handling**: Go panics will crash the shared library. Always use `recover()` at the entry point of your callbacks to prevent your mod from taking down the entire game.

---

## 🔨 Deployment

1.  Place your compiled `my_mod.dll` into `Data Center/Mods/Go/`.
2.  gregCore will automatically detect and load it during the startup phase.

---

## 📖 Related Links
*   [**Go C-Shared Build Documentation**](https://pkg.go.dev/cmd/cgo)
*   [**Example: NetworkTrafficMonitor (Go)**](/community/examples/traffic-monitor-go)
