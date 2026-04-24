Title: gregExtractor GUI Guide
Path: /tools/greg-extractor/ui
Type: How-to
Audience: mod developer
Summary: Overview of the gregExtractor desktop GUI, built with Avalonia, for visual hook management and scaffolding.
Suggested Tags: gui, avalonia, ui, tools, visual
Related Pages: /tools/greg-extractor/index, /tools/greg-extractor/cli
Split Recommendation: Keep as one page

# gregExtractor GUI Guide

The `gregExtractor` GUI provides a visual interface for hook analysis, mod scaffolding, and framework synchronization. It is built using **Avalonia** and follows a modern sidebar-based navigation pattern.

## Navigation & Pages

- **Extractor**: Path selection, hook analysis triggers, and category grouping.
- **Coverage**: Tabular view of hook implementation status across the framework.
- **Sync**: Visual diff preview and controlled framework update runs.
- **Create**: Step-by-step wizard for generating new mod scaffolds.
- **Hooks**: Searchable browser for all discovered game methods.
- **Settings**: Configuration for default paths and tool options.

## Features

- **Auto-Detection**: Automatically detects game and IL2CPP assembly paths from your Steam library.
- **Live Logging**: Real-time progress and error reporting during extraction.
- **Visual Diff**: Preview code changes before applying them during a sync.
- **DataGrid Integration**: Uses high-performance virtualized lists to handle thousands of hooks without lag.

## Technical Architecture

The GUI follows the **MVVM** (Model-View-ViewModel) pattern:
- **Root ViewModel**: `GUI/ViewModels/MainViewModel.cs`
- **Views**: Located in `GUI/Views/*.axaml`
- **Design System**: Centralized styles in `GregStyles.axaml` and colors in `GregColors.axaml`.

## Basic Workflow

1. Select a page from the sidebar.
2. Verify detected paths (or browse manually in Settings).
3. Execute the desired action (Analyze, Diff, or Create).
4. Review the results in the log or data grids.

---
*Note: The GUI is part of the tooling layer and does not interact with the game runtime directly.*
