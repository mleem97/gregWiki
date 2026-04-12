# Replacing Vanilla UI Elements

This guide explains how to surgically replace or "re-skin" the game's existing UI elements using C#.

## 1. Locating the Target

Most UI elements are accessible via `StaticUIElements` or `MainGameManager.instance`. For example, to find the IP keypad:

```csharp
var setIp = MainGameManager.instance?.setIP;
if (setIp != null) {
    var originalPanel = setIp.gameObject;
    // Your logic here
}
```

## 2. Disabling the Vanilla Visuals

Instead of destroying original objects (which might break references in game scripts), **disable only the Graphic components**:

```csharp
foreach (var img in originalPanel.GetComponentsInChildren<Image>(true)) {
    img.enabled = false;
}
foreach (var txt in originalPanel.GetComponentsInChildren<Text>(true)) {
    txt.enabled = false;
}
```

## 3. Injecting Your Modern Version

You can create your own UI from code and parent it to the game's original `RectTransform`. This ensures your UI follows the same scaling and positioning:

```csharp
GameObject myModernUi = new GameObject("Modern_IP_Keypad");
myModernUi.transform.SetParent(originalPanel.transform, false);

// Add modern background
var bgImg = myModernUi.AddComponent<Image>();
bgImg.color = new Color(0.1f, 0.1f, 0.12f, 0.95f); // Deep dark blue
```

## 4. Hooking the Logic

Your modern buttons should trigger the original methods. 

```csharp
myModernButton.onClick.AddListener((UnityAction)(() => {
    // Call the original "OK" method on the keypad
    setIp.ApplyIpAddress(); 
}));
```

## 5. Case Study: `gregIPAM`

The `gregIPAM` mod uses this technique to add a "DHCP" button below the vanilla keypad. It finds the keypad's `RectTransform` and parents its own custom panel to it:

- See `gregAddons/gregMods/gregIPAM/Patches/SetIpKeypadDhcpButton.cs` for a real-world example of uGUI injection.
