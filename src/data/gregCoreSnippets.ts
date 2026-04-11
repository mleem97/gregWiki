/**
 * Practical usage snippets for gregCore (How-to Spotlight style).
 */
export type GregCoreSnippet = {
  /** Short title for the card header */
  title: string;
  /** Path inside the gregFramework repo */
  sourcePath: string;
  code: string;
};

export const GREG_CORE_SNIPPETS: readonly GregCoreSnippet[] = [
  {
    title: 'How to Spotlight: react to money updates',
    sourcePath: 'mods/GregShowcaseMod/PlayerMoneyWatcher.cs',
    code: `var moneyChanged = GregHookName.Create(GregDomain.Player, "MoneyChanged");

GregEventDispatcher.On(moneyChanged, payload =>
{
    var delta = GregPayload.Get<float>(payload, "Amount");
    var balance = GregPayload.Get<float>(payload, "NewBalance");
    MelonLogger.Msg($"[Money] {delta:+0.00;-0.00} -> {balance:0.00}");
});`,
  },
  {
    title: 'How to Spotlight: guard payload reads',
    sourcePath: 'mods/GregShowcaseMod/SafePayloadReads.cs',
    code: `GregEventDispatcher.On(
    GregHookName.Create(GregDomain.Server, "TemperatureChanged"),
    payload =>
    {
        var rackId = GregPayload.Get<string>(payload, "RackId", "unknown");
        var value = GregPayload.Get<float>(payload, "Value", -1f);
        if (value < 0f) return;

        MelonLogger.Msg($"[Thermal] Rack={rackId} Temp={value:0.0}°C");
    });`,
  },
  {
    title: 'How to Spotlight: one map for hook names',
    sourcePath: 'mods/GregShowcaseMod/HookRegistry.cs',
    code: `public static class HookRegistry
{
    public static readonly string PlayerMoneyChanged =
        GregHookName.Create(GregDomain.Player, "MoneyChanged");

    public static readonly string EmployeeHired =
        GregHookName.Create(GregDomain.Employee, "Hired");
}

GregEventDispatcher.On(HookRegistry.EmployeeHired, _ =>
    MelonLogger.Msg("[Staff] New employee hired"));`,
  },
  {
    title: 'How to Spotlight: throttle noisy events',
    sourcePath: 'mods/GregShowcaseMod/UiThrottling.cs',
    code: `private static DateTime _lastUpdate = DateTime.MinValue;

GregEventDispatcher.On(
    GregHookName.Create(GregDomain.Ui, "TooltipChanged"),
    payload =>
    {
        var now = DateTime.UtcNow;
        if ((now - _lastUpdate).TotalMilliseconds < 250) return;
        _lastUpdate = now;

        var text = GregPayload.Get<string>(payload, "Text", string.Empty);
        if (!string.IsNullOrWhiteSpace(text))
            MelonLogger.Msg($"[UI] Tooltip: {text}");
    });`,
  },
  {
    title: 'How to Spotlight: route events by domain',
    sourcePath: 'mods/GregShowcaseMod/DomainRouter.cs',
    code: `GregEventDispatcher.On(
    GregHookName.Create(GregDomain.Network, "ConnectionStateChanged"),
    payload =>
    {
        var state = GregPayload.Get<string>(payload, "State", "Unknown");
        switch (state)
        {
            case "Connected":
                MelonLogger.Msg("[Net] Session ready");
                break;
            case "Disconnected":
                MelonLogger.Warning("[Net] Connection lost");
                break;
        }
    });`,
  },
  {
    title: 'How to Spotlight: optional unsubscribe pattern',
    sourcePath: 'mods/GregShowcaseMod/Lifecycle.cs',
    code: `private static Action<object>? _playerLevelHandler;

public override void OnInitializeMelon()
{
    var hook = GregHookName.Create(GregDomain.Player, "LevelChanged");
    _playerLevelHandler = payload =>
    {
        var level = GregPayload.Get<int>(payload, "NewLevel", 0);
        MelonLogger.Msg($"[Player] Level -> {level}");
    };

    GregEventDispatcher.On(hook, _playerLevelHandler);
}`,
  },
] as const;
