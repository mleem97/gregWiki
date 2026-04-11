using System;
using System.Collections.Generic;
using MelonLoader;
using UnityEngine;
using gregFramework.Core;

[assembly: MelonInfo(typeof(HexViewer.Main), "HexViewer", "00.01.0001", "mleem97")]
[assembly: MelonGame("Waseku", "Data Center")]

namespace HexViewer;

public sealed class Main : MelonMod
{
    private const string ModId = "HexViewer";
    private const float MaxRayDistance = 10f;

    private readonly List<string> _registeredHooks = new();

    private bool _frameworkReady;
    private bool _showPanel;

    private string _targetType = "Unbekannt";
    private string _targetColor = "N/A";
    private string _targetOwner = "N/A";

    private Texture2D? _panelTexture;
    private GUIStyle? _panelStyle;
    private GUIStyle? _labelStyle;

    public override void OnInitializeMelon()
    {
        _frameworkReady = false;
        EnsureStyles();
        RegisterCoreHooks();
    }

    public override void OnUpdate()
    {
        if (Core.Instance == null)
        {
            _frameworkReady = false;
            return;
        }

        if (!_frameworkReady)
        {
            _frameworkReady = true;
            MelonLogger.Msg("[HexViewer] gregCore ready.");
        }

        ModFramework.Events.Publish(new ModTickEvent(Time.deltaTime, Time.frameCount));

        UpdateTargetFromRaycast();
    }

    private void RegisterCoreHooks()
    {
        RegisterHook(GregNativeEventHooks.ServerInsertedInRack);
        RegisterHook(GregNativeEventHooks.NetworkCreateNewCable);
        RegisterHook(GregNativeEventHooks.ServerCustomerChanged);
        RegisterHook(GregNativeEventHooks.RackButtonUnmountRack);
    }

    private void RegisterHook(string hookName)
    {
        var canonical = GregCompatBridge.Resolve(hookName);
        if (GregCompatBridge.TryGetCanonical(hookName, out var gregName) && !string.IsNullOrWhiteSpace(gregName))
        {
            canonical = gregName;
        }

        GregEventDispatcher.On(canonical, OnHexTarget, ModId);
        _registeredHooks.Add(canonical);
    }

    private void OnHexTarget(object payload)
    {
        _targetType = GregPayload.Get(payload, "ServerType", "Unbekannt");
        _targetColor = GregPayload.Get(payload, "Color", "N/A");

        var customerId = GregPayload.Get<string?>(payload, "CustomerId", null);
        _targetOwner = string.IsNullOrWhiteSpace(customerId) ? "N/A" : customerId;

        _showPanel = true;
    }

    private void UpdateTargetFromRaycast()
    {
        var camera = Camera.main;
        if (camera == null)
        {
            _showPanel = false;
            return;
        }

        var rayOrigin = camera.transform.position;
        var rayDirection = camera.transform.forward;

        if (!Physics.Raycast(rayOrigin, rayDirection, out RaycastHit hit, MaxRayDistance))
        {
            _showPanel = false;
            return;
        }

        _showPanel = true;

        if (!string.IsNullOrWhiteSpace(hit.collider?.name))
        {
            _targetType = hit.collider.name;
        }
    }

    public override void OnGUI()
    {
        if (!_showPanel)
        {
            return;
        }

        EnsureStyles();

        var panelRect = new Rect((Screen.width / 2f) - 200f, 10f, 400f, 80f);

        if (_panelTexture != null && _panelStyle != null)
        {
            _panelStyle.normal.background = _panelTexture;
            GUI.Box(panelRect, GUIContent.none, _panelStyle);
        }
        else
        {
            GUI.Box(panelRect, GUIContent.none);
        }

        GUILayout.BeginArea(panelRect);
        GUILayout.Space(8f);

        if (_labelStyle != null)
        {
            GUILayout.Label($"Typ: {_targetType}", _labelStyle);
            GUILayout.Label($"Farbe: {_targetColor}", _labelStyle);
            GUILayout.Label($"Besitzer: {_targetOwner}", _labelStyle);
        }
        else
        {
            GUILayout.Label($"Typ: {_targetType}");
            GUILayout.Label($"Farbe: {_targetColor}");
            GUILayout.Label($"Besitzer: {_targetOwner}");
        }

        GUILayout.EndArea();
    }

    public override void OnApplicationQuit()
    {
        GregEventDispatcher.UnregisterAll(ModId);

        foreach (var hook in _registeredHooks)
        {
            GregEventDispatcher.Off(hook, OnHexTarget);
        }

        _registeredHooks.Clear();
    }

    private void EnsureStyles()
    {
        if (_panelTexture == null)
        {
            _panelTexture = new Texture2D(1, 1, TextureFormat.RGBA32, false);
            _panelTexture.SetPixel(0, 0, new Color(0.05f, 0.08f, 0.12f, 0.82f));
            _panelTexture.Apply();
        }

        _panelStyle ??= new GUIStyle(GUI.skin.box)
        {
            padding = new RectOffset(10, 10, 10, 10),
            border = new RectOffset(0, 0, 0, 0)
        };

        _labelStyle ??= new GUIStyle(GUI.skin.label)
        {
            fontSize = 14,
            normal = { textColor = Color.white }
        };
    }
}
