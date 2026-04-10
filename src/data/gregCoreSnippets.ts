/**
 * Short excerpts from gregCore (gregFramework monorepo) for the homepage.
 * Kept in sync conceptually with Core/ and Hooks/ — adjust if APIs move.
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
    title: 'GregHookName',
    sourcePath: 'gregCore/Core/GregHookName.cs',
    code: `public static string Create(GregDomain domain, string action)
    => Create(domain, action, null);

public static string Create(GregDomain domain, string action, string subject)
{
    if (string.IsNullOrWhiteSpace(action))
        throw new ArgumentException("Action ist erforderlich.", nameof(action));
    // → greg.PLAYER.MoneyChanged, greg.EMPLOYEE.Hired, …
    var domainPart = DomainToSegment(domain);
    // …
}`,
  },
  {
    title: 'GregDomain',
    sourcePath: 'gregCore/Core/GregDomain.cs',
    code: `public enum GregDomain
{
    Gameplay,
    Player,
    Employee,
    Customer,
    Server,
    Rack,
    Network,
    Power,
    Ui,
    System
}`,
  },
  {
    title: 'GregEventDispatcher',
    sourcePath: 'gregCore/Core/GregEventDispatcher.cs',
    code: `public static void On(string hookName, Action<object> handler)
{
    if (!_handlers.TryGetValue(hookName, out var list))
        _handlers[hookName] = list = new List<Action<object>>();
    list.Add(handler);
}

public static void Emit(string hookName, object payload = null)
{
    if (!_handlers.TryGetValue(hookName, out var list)) return;
    foreach (var handler in list.ToArray())
        try { handler(payload); }
        catch (Exception ex) { /* MelonLogger.Warning … */ }
}`,
  },
  {
    title: 'GregPayload',
    sourcePath: 'gregCore/Core/GregPayload.cs',
    code: `public static T Get<T>(object payload, string fieldName, T fallback = default)
{
    if (payload == null) return fallback;
    try
    {
        var prop = payload.GetType().GetProperty(
            fieldName,
            BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);
        if (prop == null) return fallback;
        var val = prop.GetValue(payload);
        return val is T typed ? typed : fallback;
    }
    catch { return fallback; }
}`,
  },
  {
    title: 'Harmony → greg hook',
    sourcePath: 'gregCore/Hooks/GregPlayerHooks.cs',
    code: `[HarmonyPatch(typeof(Player), nameof(Player.UpdateCoin))]
[HarmonyPostfix]
private static void OnMoneyChanged(Player __instance, float amount, bool withoutSound)
{
    try
    {
        GregEventDispatcher.Emit(
            GregHookName.Create(GregDomain.Player, "MoneyChanged"),
            new
            {
                Amount = amount,
                NewBalance = __instance.money,
                WithoutSound = withoutSound
            });
    }
    catch (Exception ex)
    {
        MelonLogger.Warning($"[gregCore] Hook failed: {ex.Message}");
    }
}`,
  },
  {
    title: 'Mod subscription',
    sourcePath: 'mods/GregShowcaseMod (example)',
    code: `GregEventDispatcher.On(
    GregHookName.Create(GregDomain.Player, "MoneyChanged"),
    payload =>
    {
        var delta = GregPayload.Get<float>(payload, "Amount");
        var balance = GregPayload.Get<float>(payload, "NewBalance");
        MelonLogger.Msg($"Money: {delta:+0.00;-0.00} → {balance}");
    });`,
  },
] as const;
