[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'

$Root = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$RootPath = $Root.Path
$OutDir = Join-Path $RootPath "docs\00project"
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$NowIso = [DateTime]::UtcNow.ToString("o")

$ExcludeRegex = '\\(\.git|\.vs|obj|bin|node_modules|Library|Temp|Logs|UserSettings|PackageCache)(\\|$)'

function To-RelPath($path) {
    if ($null -eq $path) { return '' }
    $pathText = [string]$path
    if ([string]::IsNullOrWhiteSpace($pathText)) { return '' }
    $full = [System.IO.Path]::GetFullPath($pathText)
    $rel = [System.IO.Path]::GetRelativePath($RootPath, $full)
    return ($rel -replace '\\', '/')
}

function Read-Text([string]$path) {
    try { return [System.IO.File]::ReadAllText($path) } catch { return "" }
}

function Read-Lines([string]$path) {
    try { return [System.IO.File]::ReadAllLines($path) } catch { return @() }
}

function Get-Files([string[]]$patterns) {
    $all = @()
    foreach ($p in $patterns) {
        $all += Get-ChildItem -Path $RootPath -Recurse -File -Filter $p -ErrorAction SilentlyContinue |
            Where-Object { $_.FullName -notmatch $ExcludeRegex }
    }
    return $all | Sort-Object FullName -Unique
}

function Extract-HarmonyPatches([string[]]$lines) {
    $result = New-Object System.Collections.Generic.List[object]
    for ($i = 0; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        if ($line -notmatch '\[HarmonyPatch\(') { continue }

        $targetClass = $null
        $targetMethod = $null
        $patchType = @()

        $mClass = [regex]::Match($line, 'typeof\(([^\)]+)\)')
        if ($mClass.Success) { $targetClass = $mClass.Groups[1].Value.Trim() }

        $mMethodNameof = [regex]::Match($line, 'nameof\([^\.]+\.([^\)]+)\)')
        if ($mMethodNameof.Success) {
            $targetMethod = $mMethodNameof.Groups[1].Value.Trim()
        } else {
            $mMethodLit = [regex]::Match($line, '"([^"]+)"')
            if ($mMethodLit.Success) { $targetMethod = $mMethodLit.Groups[1].Value.Trim() }
        }

        $windowStart = [Math]::Max(0, $i)
        $windowEnd = [Math]::Min($lines.Length - 1, $i + 80)
        $window = ($lines[$windowStart..$windowEnd] -join "`n")
        if ($window -match '\bPrefix\s*\(') { $patchType += 'Prefix' }
        if ($window -match '\bPostfix\s*\(') { $patchType += 'Postfix' }
        if ($window -match '\bTranspiler\s*\(') { $patchType += 'Transpiler' }
        if ($patchType.Count -eq 0) { $patchType += 'Unknown' }

        $result.Add([pscustomobject]@{
            targetClass = $targetClass
            targetMethod = $targetMethod
            patchType = ($patchType -join ',')
            line = $i + 1
        })
    }
    return $result
}

function Analyze-CsFile([string]$path) {
    $lines = Read-Lines $path
    $text = if ($lines.Length -gt 0) { $lines -join "`n" } else { "" }

    $namespace = ''
    $nsMatch = [regex]::Match($text, '(?m)^\s*namespace\s+([^\s;{]+)')
    if ($nsMatch.Success) { $namespace = $nsMatch.Groups[1].Value.Trim() }

    $types = @([regex]::Matches($text, '(?m)^\s*(?:public|internal|protected|private)?\s*(?:sealed\s+|abstract\s+|static\s+|partial\s+)*(class|interface|enum|record)\s+(\w+)\s*(?::\s*([^\{\r\n]+))?') |
        ForEach-Object {
            $baseRaw = $_.Groups[3].Value
            $baseList = @()
            if (-not [string]::IsNullOrWhiteSpace($baseRaw)) {
                $baseList = @($baseRaw -split ',' | ForEach-Object { $_.Trim() } | Where-Object { $_ })
            }
            [ordered]@{
                Name = $_.Groups[2].Value
                Type = $_.Groups[1].Value
                BaseOrInterfaces = @($baseList)
                PublicMethods = @()
                PublicProperties = @()
                PublicEventsDelegates = @()
                HarmonyPatches = @()
            }
        })

    if ($types.Count -eq 0) {
        $types = @([ordered]@{
            Name = [System.IO.Path]::GetFileNameWithoutExtension($path)
            Type = 'file'
            BaseOrInterfaces = @()
            PublicMethods = @()
            PublicProperties = @()
            PublicEventsDelegates = @()
            HarmonyPatches = @()
        })
    }

    $todos = @()
    $bugs = @()
    $fireCalls = @()
    $onCalls = @()
    $offCalls = @()
    $onAnyCalls = @()
    $melonCalls = @()

    for ($i = 0; $i -lt $lines.Length; $i++) {
        $line = [string]$lines[$i]
        $lineNo = $i + 1

        if ($line -match 'TODO|FIXME') { $todos += ,([ordered]@{ line = $lineNo; text = $line.Trim() }) }
        if ($line -match 'BUG|KNOWN ISSUE|WORKAROUND|BROKEN|HACK') { $bugs += ,([ordered]@{ line = $lineNo; text = $line.Trim() }) }

        $mFire = [regex]::Match($line, 'GregHookBus\.Fire\(\s*"([^"]+)"\s*(?:,\s*(.+))?\)')
        if ($mFire.Success) {
            $fireCalls += ,([ordered]@{ line = $lineNo; eventName = $mFire.Groups[1].Value; payloadShape = $mFire.Groups[2].Value.Trim() })
        }

        $mOn = [regex]::Match($line, 'GregHookBus\.On\(\s*"([^"]+)"')
        if ($mOn.Success) { $onCalls += ,([ordered]@{ line = $lineNo; eventName = $mOn.Groups[1].Value }) }

        $mOff = [regex]::Match($line, 'GregHookBus\.Off\(\s*"([^"]+)"')
        if ($mOff.Success) { $offCalls += ,([ordered]@{ line = $lineNo; eventName = $mOff.Groups[1].Value }) }

        if ($line -match 'GregHookBus\.OnAny\(') { $onAnyCalls += ,([ordered]@{ line = $lineNo }) }

        $mMelon = [regex]::Match($line, 'MelonLogger\.(Msg|Warning|Error|BigError|BigWarning)\((.+)\)')
        if ($mMelon.Success) {
            $melonCalls += ,([ordered]@{ line = $lineNo; level = $mMelon.Groups[1].Value; message = $mMelon.Groups[2].Value.Trim() })
        }
    }

    $usingExternal = @([regex]::Matches($text, '(?m)^\s*using\s+([^;]+);') |
        ForEach-Object { $_.Groups[1].Value.Trim() } |
        Where-Object { $_ -match '^(UnityEngine|MelonLoader|Il2Cpp|Il2CppInterop|HarmonyLib)\b' } |
        Sort-Object -Unique)

    $harmonyPatches = @(Extract-HarmonyPatches $lines)
    foreach ($typeItem in $types) {
        $typeItem.HarmonyPatches = $harmonyPatches
    }

    return [ordered]@{
        file = (To-RelPath ([string]$path))
        namespace = ([string]$namespace)
        classesInterfaces = @($types)
        GregHookBusFireCalls = @($fireCalls)
        GregHookBusOnCalls = @($onCalls)
        GregHookBusOffCalls = @($offCalls)
        GregHookBusOnAnyCalls = @($onAnyCalls)
        MelonLoggerCalls = @($melonCalls)
        externalDependencies = @($usingExternal)
        todosFixmes = @($todos)
        knownBugs = @($bugs)
    }
}

function Analyze-Markdown([string]$path) {
    return [ordered]@{
        file = ([string]$path)
        docType = 'general'
        headings = @()
        versionEntries = @()
        todos = @()
        firstHeading = $null
    }
}

# Step 1 files
$tree = Get-ChildItem -Path $RootPath -Recurse -Depth 4 -Force -ErrorAction SilentlyContinue |
    Where-Object { $_.FullName -notmatch '\\.(git|vs|obj|bin)(\\|$)' } |
    Select-Object @{n='FullName';e={ To-RelPath $_.FullName }}, Length, LastWriteTime

$tree | ConvertTo-Json -Depth 6 | Out-File (Join-Path $OutDir 'tree.json') -Encoding UTF8

$csFiles = Get-ChildItem -Path $RootPath -Recurse -File -Filter '*.cs' -ErrorAction SilentlyContinue |
    Where-Object { $_.FullName -notmatch '\\.(git|obj|bin)(\\|$)' -and $_.FullName -notmatch $ExcludeRegex } |
    Select-Object @{n='FullName';e={ To-RelPath $_.FullName }}, Length
$csFiles | ConvertTo-Json -Depth 4 | Out-File (Join-Path $OutDir 'cs-files.json') -Encoding UTF8

$mdFiles = Get-ChildItem -Path $RootPath -Recurse -File -Filter '*.md' -ErrorAction SilentlyContinue |
    Where-Object { $_.FullName -notmatch $ExcludeRegex } |
    Select-Object @{n='FullName';e={ To-RelPath $_.FullName }}, Length
$mdFiles | ConvertTo-Json -Depth 4 | Out-File (Join-Path $OutDir 'md-files.json') -Encoding UTF8

# Step 2 source analysis
$sourceAnalysis = New-Object System.Collections.Generic.List[object]
$allCs = Get-Files @('*.cs')
foreach ($f in $allCs) {
    $sourceAnalysis.Add((Analyze-CsFile $f.FullName))
}
$sourceAnalysis | ConvertTo-Json -Depth 20 | Out-File (Join-Path $OutDir 'source-analysis.json') -Encoding UTF8

# Step 3 docs analysis
$docsAnalysis = New-Object System.Collections.Generic.List[object]
$allMd = Get-Files @('*.md')
foreach ($f in $allMd) {
    $docsAnalysis.Add((Analyze-Markdown $f.FullName))
}
$docsAnalysis | ConvertTo-Json -Depth 12 | Out-File (Join-Path $OutDir 'docs-analysis.json') -Encoding UTF8

# Step 4 config analysis
$configAnalysis = [ordered]@{
    generatedAt = $NowIso
    configJson = @()
    nugetConfig = @()
    directoryBuildProps = @()
    csproj = @()
}

$configJsonFiles = Get-Files @('config.json')
foreach ($f in $configJsonFiles) {
    $raw = Read-Text $f.FullName
    $obj = $null
    try { $obj = $raw | ConvertFrom-Json -Depth 50 } catch { $obj = $null }
    $configAnalysis.configJson += [pscustomobject]@{
        file = To-RelPath $f.FullName
        parsed = $obj
    }
}

$nugetFiles = Get-Files @('nuget.config')
foreach ($f in $nugetFiles) {
    $xml = $null
    try { $xml = [xml](Read-Text $f.FullName) } catch { $xml = $null }
    $sources = @()
    if ($xml -and $xml.configuration.packageSources.add) {
        foreach ($a in $xml.configuration.packageSources.add) {
            $sources += [pscustomobject]@{ key = $a.key; value = $a.value }
        }
    }
    $configAnalysis.nugetConfig += [pscustomobject]@{ file = To-RelPath $f.FullName; packageSources = $sources }
}

$propsFiles = Get-Files @('Directory.Build.props')
foreach ($f in $propsFiles) {
    $xml = $null
    try { $xml = [xml](Read-Text $f.FullName) } catch { $xml = $null }
    $props = @()
    if ($xml -and $xml.Project.PropertyGroup) {
        foreach ($pg in $xml.Project.PropertyGroup) {
            foreach ($child in $pg.ChildNodes) {
                if ($child.NodeType -eq [System.Xml.XmlNodeType]::Element) {
                    $props += [pscustomobject]@{ name = $child.Name; value = $child.InnerText }
                }
            }
        }
    }
    $configAnalysis.directoryBuildProps += [pscustomobject]@{ file = To-RelPath $f.FullName; properties = $props }
}

$csprojFiles = Get-Files @('*.csproj')
foreach ($f in $csprojFiles) {
    $xml = $null
    try { $xml = [xml](Read-Text $f.FullName) } catch { $xml = $null }
    $targetFramework = $null
    $pkgRefs = @()
    $refs = @()
    if ($xml -and $xml.Project.PropertyGroup) {
        foreach ($pg in $xml.Project.PropertyGroup) {
            if ($pg.TargetFramework) { $targetFramework = $pg.TargetFramework }
        }
    }
    if ($xml -and $xml.Project.ItemGroup) {
        foreach ($ig in $xml.Project.ItemGroup) {
            foreach ($pr in $ig.PackageReference) {
                $pkgRefs += [pscustomobject]@{ include = $pr.Include; version = $pr.Version }
            }
            foreach ($r in $ig.Reference) {
                $refs += [pscustomobject]@{ include = $r.Include; hintPath = $r.HintPath }
            }
        }
    }
    $configAnalysis.csproj += [pscustomobject]@{
        file = To-RelPath $f.FullName
        targetFramework = $targetFramework
        packageReferences = $pkgRefs
        references = $refs
    }
}

$configAnalysis | ConvertTo-Json -Depth 20 | Out-File (Join-Path $OutDir 'config-analysis.json') -Encoding UTF8

# Step 5 hooks catalog
$documentedHooks = New-Object System.Collections.Generic.HashSet[string]([System.StringComparer]::Ordinal)
$hookJsonCandidates = @('greg_hooks.json','gregCore/framework/greg_hooks.json','gregCore/assets/greg_hooks.json','gregCore/pre-release/greg_hooks.json')
foreach ($rel in $hookJsonCandidates) {
    $full = Join-Path $RootPath ($rel -replace '/', '\\')
    if (Test-Path $full) {
        try {
            $j = Get-Content $full -Raw | ConvertFrom-Json
            if ($j.hooks) {
                foreach ($h in $j.hooks) {
                    if ($h.name) { [void]$documentedHooks.Add([string]$h.name) }
                }
            }
        } catch { }
    }
}

$hookMap = @{}
foreach ($entry in $sourceAnalysis) {
    foreach ($f in $entry.GregHookBusFireCalls) {
        if (-not $hookMap.ContainsKey($f.eventName)) {
            $hookMap[$f.eventName] = [ordered]@{ name = $f.eventName; firedIn = @(); subscribedIn = @(); payload = @(); documented = $documentedHooks.Contains($f.eventName) }
        }
        $hookMap[$f.eventName].firedIn += "{0}:{1}" -f $entry.file, $f.line
        if ($f.payloadShape) { $hookMap[$f.eventName].payload += $f.payloadShape }
    }
    foreach ($o in $entry.GregHookBusOnCalls) {
        if (-not $hookMap.ContainsKey($o.eventName)) {
            $hookMap[$o.eventName] = [ordered]@{ name = $o.eventName; firedIn = @(); subscribedIn = @(); payload = @(); documented = $documentedHooks.Contains($o.eventName) }
        }
        $hookMap[$o.eventName].subscribedIn += "{0}:{1}" -f $entry.file, $o.line
    }
}

$hooksArray = @()
$unusedHooks = @()
$undocumentedHooks = @()
foreach ($k in ($hookMap.Keys | Sort-Object)) {
    $h = $hookMap[$k]
    $payload = ($h.payload | Where-Object { $_ } | Select-Object -Unique)
    $hooksArray += [pscustomobject]@{
        name = $h.name
        firedIn = @($h.firedIn | Select-Object -Unique)
        subscribedIn = @($h.subscribedIn | Select-Object -Unique)
        payload = if ($payload.Count -gt 0) { ($payload -join ' | ') } else { '' }
        documented = [bool]$h.documented
    }
    if (-not $h.documented) { $undocumentedHooks += $h.name }

    $fCount = @($h.firedIn | Select-Object -Unique).Count
    $sCount = @($h.subscribedIn | Select-Object -Unique).Count
    if (($fCount -eq 0 -and $sCount -gt 0) -or ($fCount -gt 0 -and $sCount -eq 0)) {
        $unusedHooks += [pscustomobject]@{ name = $h.name; firedCount = $fCount; subscribedCount = $sCount }
    }
}

$hooksCatalog = [ordered]@{
    generatedAt = $NowIso
    hooks = $hooksArray
    undocumentedHooks = @($undocumentedHooks | Select-Object -Unique)
    unusedHooks = @($unusedHooks)
}
$hooksCatalog | ConvertTo-Json -Depth 20 | Out-File (Join-Path $OutDir 'hooks-catalog-generated.json') -Encoding UTF8

# Step 6 patch inventory
$patches = New-Object System.Collections.Generic.List[object]
$violations = New-Object System.Collections.Generic.List[object]
foreach ($entry in $sourceAnalysis) {
    $filePath = Join-Path $RootPath ($entry.file -replace '/', '\\')
    $lines = Read-Lines $filePath
    $text = if ($lines.Length -gt 0) { $lines -join "`n" } else { "" }
    $hasTryCatch = $text -match 'try\s*\{' -and $text -match 'catch\s*\('
    $hasNullCheck = $text -match '==\s*null|is\s+null|\?\.'
    $returnsFalse = $text -match 'return\s+false\s*;'

    foreach ($hp in $entry.classesInterfaces | ForEach-Object { $_.HarmonyPatches }) {
        $safe = ($hasTryCatch -and $hasNullCheck)
        $patches.Add([pscustomobject]@{
            file = $entry.file
            targetClass = $hp.targetClass
            targetMethod = $hp.targetMethod
            patchType = $hp.patchType
            safePatternCompliant = $safe
            hasNullCheck = $hasNullCheck
            hasTryCatch = $hasTryCatch
            returnsFalse = $returnsFalse
        })
        if (-not $hasTryCatch) {
            $violations.Add([pscustomobject]@{ file = $entry.file; issue = 'Kein try/catch'; severity = 'HIGH' })
        }
        if (-not $hasNullCheck) {
            $violations.Add([pscustomobject]@{ file = $entry.file; issue = 'Kein Null-Check'; severity = 'MEDIUM' })
        }
    }
}

$patchInventory = @{}
$patchInventory['generatedAt'] = $NowIso
$patchInventory['patches'] = $patches
$patchInventory['violations'] = $violations
$patchInventory | ConvertTo-Json -Depth 20 | Out-File (Join-Path $OutDir 'patch-inventory.json') -Encoding UTF8

# Step 7 service registry
$services = New-Object System.Collections.Generic.List[object]
$allTextByFile = @{}
foreach ($entry in $sourceAnalysis) {
    $allTextByFile[$entry.file] = Read-Text (Join-Path $RootPath ($entry.file -replace '/', '\\'))
}

foreach ($entry in $sourceAnalysis) {
    foreach ($ci in $entry.classesInterfaces) {
        if ($ci.Type -ne 'class') { continue }
        if ($ci.Name -notmatch 'Service$') { continue }
        $text = $allTextByFile[$entry.file]
        $hasInstance = ($text -match "\b$($ci.Name)\s+Instance\b" -or $text -match "\bstatic\s+$($ci.Name)\s+Instance\b")
        $status = 'IMPLEMENTED'
        if ($text -match 'NotImplementedException') { $status = 'STUB' }
        elseif ($text -match 'TODO|FIXME') { $status = 'PARTIAL' }

        $initIn = $null
        $deinitIn = $null
        $coreFiles = @('gregCore/src/gregModLoader/gregCore.cs','gregCore/src/gregModLoader/gregHarmonyPatches.cs')
        foreach ($cf in $coreFiles) {
            $full = Join-Path $RootPath ($cf -replace '/', '\\')
            if (Test-Path $full) {
                $ct = Read-Text $full
                if (-not $initIn -and $ct -match "OnInitializeMelon[\s\S]{0,3000}$($ci.Name)") { $initIn = $cf }
                if (-not $deinitIn -and $ct -match "OnDeinitializeMelon[\s\S]{0,3000}$($ci.Name)") { $deinitIn = $cf }
            }
        }

        $dependsOn = @([regex]::Matches($text, 'new\s+([A-Z]\w+)\s*\(') | ForEach-Object { $_.Groups[1].Value } | Where-Object { $_ -ne $ci.Name } | Select-Object -Unique)
        $exposedHooks = @($entry.GregHookBusFireCalls | ForEach-Object { $_.eventName } | Select-Object -Unique)

        $services.Add([pscustomobject]@{
            name = $ci.Name
            file = $entry.file
            hasInstance = [bool]$hasInstance
            initializedIn = $initIn
            deinitializedIn = $deinitIn
            dependsOn = $dependsOn
            exposedHooks = $exposedHooks
            status = $status
        })
    }
}
$serviceRegistry = @{}
$serviceRegistry['generatedAt'] = $NowIso
$serviceRegistry['services'] = $services
$serviceRegistry | ConvertTo-Json -Depth 20 | Out-File (Join-Path $OutDir 'service-registry.json') -Encoding UTF8

# Step 8 feature matrix (heuristic)
$plannedFeatures = @(
    @{ id = 'gregMod.SaveSystemData'; plannedServices = @('GregSaveService') },
    @{ id = 'gregMod.BalanceAndEconomy'; plannedServices = @('GregBalanceService') },
    @{ id = 'gregMod.LocalisationBridge'; plannedServices = @('GregLocalisationService') },
    @{ id = 'gregMod.NetworkTopology'; plannedServices = @('GregTopologyService') },
    @{ id = 'gregMod.PowerSimulation'; plannedServices = @('GregPowerService') },
    @{ id = 'gregMod.UIFramework'; plannedServices = @('GregUiService','GregUIManager') },
    @{ id = 'gregMod.Multiplayer'; plannedServices = @('GregMultiplayerService') },
    @{ id = 'gregMod.MCP'; plannedServices = @('GregMCPServer') }
)

$featureRows = New-Object System.Collections.Generic.List[object]
foreach ($pf in $plannedFeatures) {
    $impl = @()
    foreach ($s in $pf.plannedServices) {
        $hit = $services | Where-Object { $_.name -eq $s -or $_.file -match [regex]::Escape($s) }
        if ($hit) { $impl += $s }
    }

    $status = 'MISSING'
    if ($impl.Count -gt 0 -and $impl.Count -lt $pf.plannedServices.Count) { $status = 'PARTIAL' }
    elseif ($impl.Count -eq $pf.plannedServices.Count) {
        $implStatus = @($services | Where-Object { $pf.plannedServices -contains $_.name } | Select-Object -ExpandProperty status)
        if ($implStatus -contains 'STUB' -or $implStatus -contains 'PARTIAL') { $status = 'PARTIAL' } else { $status = 'IMPLEMENTED' }
    }

    $featureRows.Add([pscustomobject]@{
        id = $pf.id
        status = $status
        plannedServices = $pf.plannedServices
        implementedServices = @($impl | Select-Object -Unique)
        plannedHooks = @()
        implementedHooks = @()
        plannedPatches = @()
        implementedPatches = @()
        blockers = @()
        notes = ''
    })
}
$featureMatrix = @{}
$featureMatrix['generatedAt'] = $NowIso
$featureMatrix['features'] = $featureRows
$featureMatrix | ConvertTo-Json -Depth 20 | Out-File (Join-Path $OutDir 'feature-matrix.json') -Encoding UTF8

# Step 9 issues and conflicts
$knownIssues = New-Object System.Collections.Generic.List[object]
foreach ($entry in $sourceAnalysis) {
    foreach ($todo in $entry.todosFixmes) {
        $sev = if ($todo.text -match 'CRITICAL|BLOCKER|HIGH') { 'HIGH' } else { 'MEDIUM' }
        $knownIssues.Add([pscustomobject]@{
            type = 'TODO'
            severity = $sev
            location = ("{0}:{1}" -f $entry.file, $todo.line)
            description = $todo.text
            workaround = $null
            fixedIn = $null
        })
    }
    foreach ($bug in $entry.knownBugs) {
        $sev = if ($bug.text -match 'CRITICAL|HIGH|BROKEN') { 'HIGH' } else { 'MEDIUM' }
        $knownIssues.Add([pscustomobject]@{
            type = 'BUG'
            severity = $sev
            location = ("{0}:{1}" -f $entry.file, $bug.line)
            description = $bug.text
            workaround = $null
            fixedIn = $null
        })
    }
}

$modConflicts = New-Object System.Collections.Generic.List[object]
foreach ($doc in $docsAnalysis) {
    $full = Join-Path $RootPath ($doc.file -replace '/', '\\')
    $txt = Read-Text $full
    if ($txt -match 'conflict|incompatible|kollid') {
        $modConflicts.Add([pscustomobject]@{ mod = $doc.file; conflictsWith = 'unknown'; resolution = 'check documentation context' })
    }
}
$issuesConflicts = @{}
$issuesConflicts['generatedAt'] = $NowIso
$issuesConflicts['knownIssues'] = $knownIssues
$issuesConflicts['modConflicts'] = $modConflicts
$issuesConflicts | ConvertTo-Json -Depth 20 | Out-File (Join-Path $OutDir 'issues-conflicts.json') -Encoding UTF8

# Step 10 dependency graph (heuristic)
$nodes = New-Object System.Collections.Generic.List[object]
$edges = New-Object System.Collections.Generic.List[object]

$allClassNames = @()
foreach ($entry in $sourceAnalysis) {
    foreach ($ci in $entry.classesInterfaces) {
        if ($ci.Name) {
            $allClassNames += $ci.Name
            $typeKind = if ($ci.Name -match 'Mod$|gregCore$') { 'MelonMod' } elseif ($ci.Name -match 'Service$') { 'Service' } else { 'Model' }
            $nodes.Add([pscustomobject]@{ id = $ci.Name; type = $typeKind })
        }
    }
}
$allClassNames = $allClassNames | Select-Object -Unique

foreach ($entry in $sourceAnalysis) {
    $full = Join-Path $RootPath ($entry.file -replace '/', '\\')
    $txt = Read-Text $full
    foreach ($ci in $entry.classesInterfaces) {
        if (-not $ci.Name) { continue }
        foreach ($target in $allClassNames) {
            if ($target -eq $ci.Name) { continue }
            if ($txt -match "\b$([regex]::Escape($target))\b") {
                $edges.Add([pscustomobject]@{ from = $ci.Name; to = $target; rel = 'references' })
            }
        }
    }
}

$nodesUniq = @($nodes | Sort-Object id,type -Unique)
$edgesUniq = @($edges | Sort-Object from,to,rel -Unique)

$nodeIds = $nodesUniq | Select-Object -ExpandProperty id
$involved = New-Object System.Collections.Generic.HashSet[string]
foreach ($e in $edgesUniq) { [void]$involved.Add($e.from); [void]$involved.Add($e.to) }
$orphans = @($nodeIds | Where-Object { -not $involved.Contains($_) } | Sort-Object -Unique)

$dependencyGraph = [ordered]@{
    generatedAt = $NowIso
    nodes = $nodesUniq
    edges = $edgesUniq
    cycles = @()
    orphans = $orphans
}
$dependencyGraph | ConvertTo-Json -Depth 20 | Out-File (Join-Path $OutDir 'dependency-graph.json') -Encoding UTF8

# Step 11 IL2CPP compliance audit
$viol = New-Object System.Collections.Generic.List[object]
$totalLines = 0
foreach ($entry in $sourceAnalysis) {
    $full = Join-Path $RootPath ($entry.file -replace '/', '\\')
    $lines = Read-Lines $full
    $totalLines += $lines.Length
    for ($i = 0; $i -lt $lines.Length; $i++) {
        $l = $lines[$i]
        $ln = $i + 1

        if ($l -match 'StartCoroutine\(') {
            $viol.Add([pscustomobject]@{ file = $entry.file; line = $ln; violation = 'StartCoroutine verwendet statt MelonCoroutines.Start'; severity = 'HIGH'; fixSuggestion = 'MelonCoroutines.Start(MyCoroutine())' })
        }
        if ($l -match 'Input\.GetKey') {
            $viol.Add([pscustomobject]@{ file = $entry.file; line = $ln; violation = 'Input.GetKey/Old Input System'; severity = 'HIGH'; fixSuggestion = 'Unity InputSystem API verwenden' })
        }
        if ($l -match 'new\s+GUIStyle\s*\(') {
            $sev = if ($l -match 'OnGUI|Update') { 'MEDIUM' } else { 'LOW' }
            $viol.Add([pscustomobject]@{ file = $entry.file; line = $ln; violation = 'new GUIStyle() potentiell uncached'; severity = $sev; fixSuggestion = 'GUIStyle cachen' })
        }
        if ($l -match 'foreach\s*\(\s*Transform\s+\w+\s+in\s+') {
            $viol.Add([pscustomobject]@{ file = $entry.file; line = $ln; violation = 'foreach Transform in hot path'; severity = 'HIGH'; fixSuggestion = 'for-loop oder cache iterator' })
        }
        if ($l -match 'FindObjectsOfType<') {
            $viol.Add([pscustomobject]@{ file = $entry.file; line = $ln; violation = 'FindObjectsOfType potential performance hit'; severity = 'MEDIUM'; fixSuggestion = 'results cachen, nicht in Update nutzen' })
        }
        if ($l -match 'string\s*==\s*') {
            $viol.Add([pscustomobject]@{ file = $entry.file; line = $ln; violation = 'string == comparison warning'; severity = 'LOW'; fixSuggestion = 'StringComparison explizit setzen' })
        }
    }
}

$weights = 0
foreach ($v in $viol) {
    switch ($v.severity) {
        'HIGH' { $weights += 3 }
        'MEDIUM' { $weights += 2 }
        default { $weights += 1 }
    }
}
$rawScore = 100 - [math]::Min(100, [math]::Round(($weights / [math]::Max(1, ($totalLines / 1000.0))) , 0))
if ($rawScore -lt 0) { $rawScore = 0 }
$il2cppAudit = @{}
$il2cppAudit['generatedAt'] = $NowIso
$il2cppAudit['violations'] = $viol
$il2cppAudit['complianceScore'] = ("{0}/100" -f $rawScore)
$il2cppAudit | ConvertTo-Json -Depth 20 | Out-File (Join-Path $OutDir 'il2cpp-audit.json') -Encoding UTF8

# Step 12 human summary md
$implemented = @($featureRows | Where-Object { $_.status -eq 'IMPLEMENTED' })
$partial = @($featureRows | Where-Object { $_.status -eq 'PARTIAL' })
$missing = @($featureRows | Where-Object { $_.status -eq 'MISSING' })
$critIssues = @($issuesConflicts.knownIssues | Where-Object { $_.severity -in @('CRITICAL','HIGH') })
$topViol = @($il2cppAudit.violations | Where-Object { $_.severity -in @('HIGH','CRITICAL') } | Select-Object -First 10)

$ctxMd = @()
$ctxMd += "# gregCore — Projekt-Kontext Snapshot"
$ctxMd += "Generiert: $NowIso"
$ctxMd += ""
$ctxMd += "## Projektübersicht"
$ctxMd += "- Spiel: Data Center (Unity 6000.4.2f1, IL2CPP x64)"
$ctxMd += "- MelonLoader: v0.7.2"
$ctxMd += "- Scan Root: $(To-RelPath $RootPath)"
$ctxMd += "- Scan Filter: Excludes $ExcludeRegex"
$ctxMd += ""
$ctxMd += "## Implementierungsstand"
$ctxMd += "| Modul | Status | Services |"
$ctxMd += "|---|---|---|"
foreach ($f in $featureRows) {
    $ctxMd += "| $($f.id) | $($f.status) | $(([string]::Join(', ', $f.implementedServices))) |"
}
$ctxMd += ""
$ctxMd += "## Offene TODOs (kritisch)"
if ($critIssues.Count -eq 0) { $ctxMd += "- Keine HIGH/CRITICAL Issues erkannt." } else {
    foreach ($i in $critIssues | Select-Object -First 20) { $ctxMd += "- [$($i.severity)] $($i.location): $($i.description)" }
}
$ctxMd += ""
$ctxMd += "## IL2CPP-Verstöße (Top 10 HIGH/CRITICAL)"
if ($topViol.Count -eq 0) { $ctxMd += "- Keine HIGH/CRITICAL Verstöße erkannt." } else {
    foreach ($v in $topViol) { $ctxMd += "- [$($v.severity)] $($v.file):$($v.line) — $($v.violation)" }
}
$ctxMd += ""
$ctxMd += "## Service-Abhängigkeiten"
$ctxMd += "- Services erkannt: $($services.Count)"
$ctxMd += "- Graph Nodes: $($nodesUniq.Count), Edges: $($edgesUniq.Count), Orphans: $($orphans.Count)"
$ctxMd += ""
$ctxMd += "## Hooks-Katalog"
$ctxMd += "- Hooks erkannt: $($hooksArray.Count)"
$ctxMd += "- Undocumented: $((@($hooksCatalog.undocumentedHooks)).Count)"
$ctxMd += "- Unused: $((@($hooksCatalog.unusedHooks)).Count)"
$ctxMd += ""
$ctxMd += "## Mod-Konflikte"
if ($null -eq $modConflicts -or $modConflicts.Count -eq 0) { $ctxMd += "- Keine expliziten Konflikte erkannt." } else {
    foreach ($mc in $modConflicts) { $ctxMd += "- $($mc.mod) -> $($mc.conflictsWith)" }
}
$ctxMd += ""
$ctxMd += "## Nächste Implementierungs-Prioritäten"
foreach ($m in $missing + $partial) { $ctxMd += "- $($m.id) ($($m.status))" }

$ctxMd -join "`n" | Out-File (Join-Path $OutDir 'greg-context.md') -Encoding UTF8

# Step 13 master json with inline embeds
function Read-JsonFile([string]$name) {
    $fp = Join-Path $OutDir $name
    if (-not (Test-Path $fp)) { return @() }
    $raw = Read-Text $fp
    if ([string]::IsNullOrWhiteSpace($raw)) { return @() }
    try { return ($raw | ConvertFrom-Json -Depth 100) } catch { return @() }
}

$gregCoreVersion = 'unknown'
$gregCoreCsprojPath = Join-Path $RootPath 'gregCore\gregCore.csproj'
if (Test-Path $gregCoreCsprojPath) {
    try {
        $gcXml = [xml](Read-Text $gregCoreCsprojPath)
        foreach ($pg in $gcXml.Project.PropertyGroup) {
            if ($pg.Version -and -not [string]::IsNullOrWhiteSpace($pg.Version)) {
                $gregCoreVersion = [string]$pg.Version
                break
            }
        }
    } catch { }
}

$master = [ordered]@{
    meta = [ordered]@{
        generatedAt = $NowIso
        gregCoreVersion = $gregCoreVersion
        gameVersion = 'Data Center / Unity 6000.4.2f1'
        melonLoaderVersion = '0.7.2'
        scanPaths = @((To-RelPath $RootPath))
    }
    projectTree = Read-JsonFile 'tree.json'
    sourceAnalysis = Read-JsonFile 'source-analysis.json'
    docsAnalysis = Read-JsonFile 'docs-analysis.json'
    configAnalysis = Read-JsonFile 'config-analysis.json'
    hooksCatalog = Read-JsonFile 'hooks-catalog-generated.json'
    patchInventory = Read-JsonFile 'patch-inventory.json'
    serviceRegistry = Read-JsonFile 'service-registry.json'
    featureMatrix = Read-JsonFile 'feature-matrix.json'
    issuesConflicts = Read-JsonFile 'issues-conflicts.json'
    dependencyGraph = Read-JsonFile 'dependency-graph.json'
    il2cppAudit = Read-JsonFile 'il2cpp-audit.json'
}
$master | ConvertTo-Json -Depth 100 | Out-File (Join-Path $OutDir 'greg-context.json') -Encoding UTF8

# Step 14 validation report
$vr = @()
$vr += "# gregCore Validierungsbericht"
$vr += ""
$vr += "Generiert: $NowIso"
$vr += ""
$vr += "## ✅ Vollständig implementiert"
if ($implemented.Count -eq 0) { $vr += "- Keine Features als IMPLEMENTED markiert." } else { foreach ($f in $implemented) { $vr += "- $($f.id)" } }
$vr += ""
$vr += "## ⚠️ Teilweise implementiert"
if ($partial.Count -eq 0) { $vr += "- Keine PARTIAL Features." } else { foreach ($f in $partial) { $vr += "- $($f.id) — implementiert: $([string]::Join(', ', $f.implementedServices))" } }
$vr += ""
$vr += "## ❌ Nicht implementiert (geplant)"
if ($missing.Count -eq 0) { $vr += "- Keine MISSING Features." } else { foreach ($f in $missing) { $vr += "- $($f.id)" } }
$vr += ""
$vr += "## 🚫 IL2CPP-Verstöße (CRITICAL/HIGH)"
$highViol = @($il2cppAudit.violations | Where-Object { $_.severity -in @('CRITICAL','HIGH') })
if ($highViol.Count -eq 0) { $vr += "- Keine CRITICAL/HIGH gefunden." } else { foreach ($v in $highViol) { $vr += "- [$($v.severity)] $($v.file):$($v.line) — $($v.violation)" } }
$vr += ""
$vr += "## 🔗 Ungekoppelte Hooks"
if ((@($hooksCatalog.unusedHooks)).Count -eq 0) { $vr += "- Keine ungekoppelten Hooks." } else { foreach ($u in $hooksCatalog.unusedHooks) { $vr += "- $($u.name) (fire=$($u.firedCount), on=$($u.subscribedCount))" } }
$vr += ""
$vr += "## 🔄 Zirkuläre Abhängigkeiten"
if ((@($dependencyGraph.cycles)).Count -eq 0) { $vr += "- Keine Zyklen erkannt." } else { foreach ($c in $dependencyGraph.cycles) { $vr += "- $c" } }
$vr += ""
$vr += "## 📋 Empfohlene Implementierungsreihenfolge"
$prio = @($partial + $missing)
if ($prio.Count -eq 0) { $vr += "- Keine offenen Features." } else {
    $n = 1
    foreach ($p in $prio) {
        $reason = if ($p.status -eq 'PARTIAL') { 'bereits begonnen' } else { 'noch offen' }
        $vr += "$n. $($p.id) — Grund: $reason"
        $n++
    }
}
$vr -join "`n" | Out-File (Join-Path $OutDir 'validation-report.md') -Encoding UTF8

Write-Host "Collector completed. Outputs in: $(To-RelPath $OutDir)" -ForegroundColor Green
