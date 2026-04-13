using System;
using System.Globalization;
using System.Linq;
using System.Reflection;
using MelonLoader;
using UnityEngine;
using gregFramework.Core;

[assembly: MelonInfo(typeof(HexViewer.Main), "HexViewer", "00.01.0001", "mleem97")]
[assembly: MelonGame("Waseku", "Data Center")]

namespace HexViewer;

public sealed class Main : MelonMod
{
    private const string ModId = "HexViewer";
    private bool _frameworkReady;
    private bool _showPanel;

    private string _rackName = "SERVER RACK";
    private string _rackColorHex = "#N/A";
    private string _installedDevices = "N/A";
    private string _problemDevices = "N/A";
    private string _rackIops = "N/A";
    private string _statusText = "RACK TELEMETRY";
    private string _entityId = "N/A";
    private string _analysisResult = "N/A";
    private bool _hasRackProblems;

    private bool _analyzerDiscoveryDone;
    private MethodInfo? _analyzerMethod;
    private object? _analyzerTarget;

    private Texture2D? _panelTexture;
    private GUIStyle? _panelStyle;
    private GUIStyle? _labelStyle;

    public override void OnInitializeMelon()
    {
        EnsureStyles();

        if (Core.Instance == null)
        {
            LoggerInstance.Warning("[HexViewer] Core.Instance is null in OnInitializeMelon(). Waiting in OnUpdate().");
            return;
        }

        RegisterCoreHooks();
        _frameworkReady = true;
    }

    public override void OnUpdate()
    {
        if (Core.Instance == null)
        {
            return;
        }

        if (!_frameworkReady)
        {
            RegisterCoreHooks();
            _frameworkReady = true;
            LoggerInstance.Msg("[HexViewer] gregCore ready.");
        }

        EnsureOptionalAnalyzerBinding();
        UpdateTargetFromRaycast();

        if (_showPanel && _hasRackProblems && Input.GetKeyDown(KeyCode.F8))
        {
            TriggerOptionalRackAnalysis();
        }
    }

    private void RegisterCoreHooks()
    {
        GregEventDispatcher.On(GregNativeEventHooks.ServerInsertedInRack, OnHexTarget, ModId);
        GregEventDispatcher.On(GregNativeEventHooks.NetworkCreateNewCable, OnHexTarget, ModId);
        GregEventDispatcher.On(GregNativeEventHooks.ServerCustomerChanged, OnHexTarget, ModId);
        GregEventDispatcher.On(GregNativeEventHooks.RackButtonUnmountRack, OnHexTarget, ModId);
    }

    private void OnHexTarget(object payload)
    {
        var entityName = PickString(payload, "EntityName", "RackName", "ServerType", "Rack", "CableName", "SpinnerName") ?? "SERVER RACK";
        var entityType = PickString(payload, "EntityType", "Type", "ObjectType", "Category");
        _entityId = PickString(payload, "RackId", "EntityId", "Id", "ServerRackId") ?? "N/A";

        ApplyEntityPresentation(entityName, entityType);
        _rackColorHex = NormalizeHexColor(PickString(payload, "RackColor", "ColorHex", "Color", "HexColor"));
        _installedDevices = PickNumber(payload, "InstalledDevices", "DeviceCount", "Devices", "ServerCount") ?? "N/A";
        _problemDevices = PickNumber(payload, "ProblemDevices", "IssueCount", "Problems", "FaultCount") ?? "N/A";
        _rackIops = PickNumber(payload, "IOPS", "RackIOPS", "CurrentIOPS", "TotalIOPS") ?? "N/A";
        _hasRackProblems = HasPositiveNumber(_problemDevices);

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

        if (!Physics.Raycast(rayOrigin, rayDirection, out RaycastHit hit, 10f))
        {
            _showPanel = false;
            return;
        }

        _showPanel = true;

        if (!string.IsNullOrWhiteSpace(hit.collider?.name))
        {
            ApplyEntityPresentation(hit.collider.name, null);
        }
    }

    public override void OnGUI()
    {
        if (!_showPanel)
        {
            return;
        }

        EnsureStyles();

        const float panelWidth = 420f;
        const float panelHeight = 170f;
        const float topOffset = 16f;
        const float rightOffset = 16f;
        var panelRect = new Rect(Screen.width - panelWidth - rightOffset, topOffset, panelWidth, panelHeight);

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
            GUILayout.Label($"□ {_rackName.ToUpperInvariant()}", _labelStyle);
            GUILayout.Space(10f);
            GUILayout.Label(_statusText, _labelStyle);
            GUILayout.Space(8f);
            GUILayout.Label($"HEX: {_rackColorHex}", _labelStyle);
            GUILayout.Label($"DEVICES: {_installedDevices}", _labelStyle);
            GUILayout.Label($"ISSUES: {_problemDevices}", _labelStyle);
            GUILayout.Label($"IOPS: {_rackIops}", _labelStyle);
            if (_hasRackProblems)
            {
                GUILayout.Space(6f);
                GUILayout.Label("Press F8 for Analysis", _labelStyle);
                if (!string.Equals(_analysisResult, "N/A", StringComparison.OrdinalIgnoreCase))
                {
                    GUILayout.Label($"ANALYSIS: {_analysisResult}", _labelStyle);
                }
            }
        }
        else
        {
            GUILayout.Label($"□ {_rackName.ToUpperInvariant()}");
            GUILayout.Space(10f);
            GUILayout.Label(_statusText);
            GUILayout.Space(8f);
            GUILayout.Label($"HEX: {_rackColorHex}");
            GUILayout.Label($"DEVICES: {_installedDevices}");
            GUILayout.Label($"ISSUES: {_problemDevices}");
            GUILayout.Label($"IOPS: {_rackIops}");
            if (_hasRackProblems)
            {
                GUILayout.Space(6f);
                GUILayout.Label("Press F8 for Analysis");
                if (!string.Equals(_analysisResult, "N/A", StringComparison.OrdinalIgnoreCase))
                {
                    GUILayout.Label($"ANALYSIS: {_analysisResult}");
                }
            }
        }

        GUILayout.EndArea();
    }

    public override void OnApplicationQuit()
    {
        GregEventDispatcher.UnregisterAll(ModId);
        _frameworkReady = false;
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

    private static string? PickString(object payload, params string[] keys)
    {
        foreach (var key in keys)
        {
            var value = GregPayload.Get<string?>(payload, key, null);
            if (!string.IsNullOrWhiteSpace(value))
            {
                return value;
            }
        }

        return null;
    }

    private static string? PickNumber(object payload, params string[] keys)
    {
        foreach (var key in keys)
        {
            var asString = GregPayload.Get<string?>(payload, key, null);
            if (!string.IsNullOrWhiteSpace(asString))
            {
                return asString;
            }

            var asInt = GregPayload.Get<int?>(payload, key, null);
            if (asInt.HasValue)
            {
                return asInt.Value.ToString();
            }

            var asLong = GregPayload.Get<long?>(payload, key, null);
            if (asLong.HasValue)
            {
                return asLong.Value.ToString();
            }

            var asFloat = GregPayload.Get<float?>(payload, key, null);
            if (asFloat.HasValue)
            {
                return asFloat.Value.ToString("0.##");
            }
        }

        return null;
    }

    private static string NormalizeHexColor(string? value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            return "#N/A";
        }

        var trimmed = value.Trim();
        if (!trimmed.StartsWith("#", StringComparison.Ordinal))
        {
            trimmed = $"#{trimmed}";
        }

        return trimmed.ToUpperInvariant();
    }

    private static bool HasPositiveNumber(string value)
    {
        return double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) && parsed > 0d;
    }

    private void EnsureOptionalAnalyzerBinding()
    {
        if (_analyzerDiscoveryDone)
        {
            return;
        }

        _analyzerDiscoveryDone = true;

        try
        {
            var resetSwitchAssembly = AppDomain.CurrentDomain
                .GetAssemblies()
                .FirstOrDefault(assembly => assembly.GetName().Name?.Contains("gregResetSwitch", StringComparison.OrdinalIgnoreCase) == true);

            if (resetSwitchAssembly == null)
            {
                return;
            }

            var candidateMethodNames = new[]
            {
                "AnalyzeRack",
                "TryAnalyzeRack",
                "GetRackAnalysis",
                "RunRackAnalysis"
            };

            foreach (var type in resetSwitchAssembly.GetTypes())
            {
                var method = type
                    .GetMethods(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance)
                    .FirstOrDefault(m =>
                    {
                        if (!candidateMethodNames.Contains(m.Name, StringComparer.OrdinalIgnoreCase))
                        {
                            return false;
                        }

                        var parameterCount = m.GetParameters().Length;
                        return parameterCount <= 2;
                    });

                if (method == null)
                {
                    continue;
                }

                _analyzerMethod = method;
                if (!method.IsStatic)
                {
                    _analyzerTarget = Activator.CreateInstance(type);
                }

                LoggerInstance.Msg($"[HexViewer] Optional analyzer connected: {type.FullName}.{method.Name}");
                return;
            }
        }
        catch (Exception ex)
        {
            LoggerInstance.Warning($"[HexViewer] Optional analyzer discovery failed: {ex.Message}");
        }
    }

    private void TriggerOptionalRackAnalysis()
    {
        if (_analyzerMethod == null)
        {
            _analysisResult = "gregResetSwitch not available";
            return;
        }

        try
        {
            var parameters = _analyzerMethod.GetParameters();
            object? result;

            if (parameters.Length == 0)
            {
                result = _analyzerMethod.Invoke(_analyzerTarget, null);
            }
            else if (parameters.Length == 1)
            {
                result = _analyzerMethod.Invoke(_analyzerTarget, new object?[] { _entityId });
            }
            else
            {
                result = _analyzerMethod.Invoke(_analyzerTarget, new object?[] { _entityId, _rackName });
            }

            _analysisResult = result?.ToString() ?? "No analysis data";
        }
        catch (Exception ex)
        {
            _analysisResult = "Analysis failed";
            LoggerInstance.Warning($"[HexViewer] F8 analysis failed: {ex.Message}");
        }
    }

    private void ApplyEntityPresentation(string entityName, string? entityType)
    {
        var safeName = string.IsNullOrWhiteSpace(entityName) ? "SERVER RACK" : entityName.Trim();
        var combined = $"{safeName} {entityType}".ToLowerInvariant();

        if (combined.Contains("employee") || combined.Contains("staff") || combined.Contains("greg"))
        {
            _rackName = "Greg <3";
            _statusText = "we love greg";
            _hasRackProblems = false;
            return;
        }

        if (combined.Contains("cable") || combined.Contains("spool") || combined.Contains("spinner"))
        {
            _rackName = safeName;
            _statusText = "CABLE TELEMETRY";
            return;
        }

        _rackName = safeName;
        _statusText = "RACK TELEMETRY";
    }
}
