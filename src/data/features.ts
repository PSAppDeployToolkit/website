export interface FeatureItem {
  readonly text: string;
  readonly version?: 'v4' | 'v4.1' | 'v4.2';
}

export interface FeatureGroup {
  readonly title: string;
  readonly icon: string;
  readonly description: string;
  readonly items: readonly FeatureItem[];
}

export const featureGroups: readonly FeatureGroup[] = [
  {
    title: 'User Interface & Dialogs',
    icon: '/images/features/application_window.png',
    description: 'A polished, brandable deployment experience for end users with full dialog control.',
    items: [
      { text: 'Modern Fluent UI with automatic light and dark mode', version: 'v4' },
      { text: 'Classic UI option for backward compatibility' },
      { text: 'Welcome dialog with app-close prompts, deferrals, and countdown timers' },
      {
        text: 'Custom dialogs with buttons, icons, input boxes, and secure password fields',
        version: 'v4.1',
      },
      { text: 'Progress bar with real-time percentage tracking', version: 'v4.1' },
      { text: 'Restart prompts with countdown, snooze, and deadline enforcement' },
      { text: 'Custom branding with organization logo, banner, and accent colors' },
      { text: 'Multi-language localization with formattable text and URL hyperlinks' },
    ],
  },
  {
    title: 'Application Lifecycle',
    icon: '/images/features/construction_worker_beard_long.svg',
    description: "Manage every stage of an application's deployment from discovery through removal.",
    items: [
      { text: 'Install, Uninstall, and Repair deployment types with Pre/Main/Post phases' },
      { text: 'MSI installation with transforms, patches, and custom properties' },
      { text: 'EXE installation with automated exit code handling' },
      { text: 'Application discovery by name, version, publisher, or architecture' },
      { text: 'Bulk uninstallation with flexible matching and wildcards' },
      { text: 'Application blocking via IFEO to prevent launch during deployment' },
      { text: 'Zero-config deployment - auto-detect MSI or WIM in Files directory' },
    ],
  },
  {
    title: 'Process Execution & Control',
    icon: '/images/features/devices_processor.svg',
    description: 'Fine-grained control over how processes are launched, monitored, and terminated.',
    items: [
      { text: 'Execute processes with window styles, priority classes, and timeouts' },
      { text: 'Run processes as the logged-in user from SYSTEM context' },
      {
        text: 'Unelevated token support for Windows 11 Admin Protection',
        version: 'v4.1',
      },
      { text: 'Wait for or terminate child processes alongside parent', version: 'v4.1' },
      { text: 'Environment variable expansion in execution paths', version: 'v4.1' },
      {
        text: 'Stream encoding control (UTF-8 for Winget and similar tools)',
        version: 'v4.1',
      },
      { text: 'Network drive and user-context MSI execution support', version: 'v4.1' },
    ],
  },
  {
    title: 'File, Registry & System Operations',
    icon: '/images/features/code.svg',
    description: 'Comprehensive primitives for files, folders, registry, INI, shortcuts, and permissions.',
    items: [
      { text: 'File copy with Robocopy integration, delete, and folder management' },
      { text: 'Shortcut creation, modification, and icon extraction' },
      { text: 'Deploy or remove files across all local user profiles' },
      { text: 'Archive operations (zip) and WIM mount/unmount' },
      {
        text: 'Registry CRUD with 32/64-bit hive support and MultiString values',
        version: 'v4.1',
      },
      { text: 'INI file section and value management', version: 'v4.1' },
      { text: 'Environment variable and DLL registration management', version: 'v4.1' },
      { text: 'File and folder ACL/permission management', version: 'v4.1' },
    ],
  },
  {
    title: 'Logging & Diagnostics',
    icon: '/images/features/tasklist.svg',
    description: 'Automatic, structured logging that makes troubleshooting straightforward.',
    items: [
      { text: 'Comprehensive automatic logging for every function call' },
      { text: 'Hierarchical log organization by Vendor, App, and Version' },
      { text: 'MSI installer log capture alongside PSADT logs' },
      { text: 'Log compression and configurable size/history management' },
      { text: 'Structured error handling with detailed error record analysis' },
      { text: 'Debug message logging for development and troubleshooting' },
    ],
  },
  {
    title: 'Enterprise Platform Integration',
    icon: '/images/features/satellites.svg',
    description: 'First-class support for Intune, ConfigMgr, and other endpoint management platforms.',
    items: [
      { text: 'Microsoft Intune deployment with metadata and standardized flows' },
      { text: 'ConfigMgr (SCCM/MCM) application model support' },
      { text: 'MCM exit code handling with Fast Retry for accurate reporting' },
      { text: 'Reboot code suppression (3010) to prevent unwanted prompts' },
      { text: 'Application bundling beyond the 5-app dependency chain limit' },
      { text: 'Bandwidth-efficient loose file deployment over distribution points' },
      { text: 'SCCM software update and task execution integration' },
    ],
  },
  {
    title: 'Detection & Intelligence',
    icon: '/images/features/devices_laptop.svg',
    description: 'Automatically detect system state, user activity, and environmental conditions.',
    items: [
      { text: 'Operating system and hardware information gathering' },
      { text: 'Pending reboot detection (CBS, Windows Update, SCCM, file renames)' },
      { text: 'Battery/laptop and microphone-in-use detection' },
      { text: 'PowerPoint full-screen presentation mode detection' },
      {
        text: 'OOBE/Autopilot and Enrollment Status Page (ESP) detection',
        version: 'v4.1',
      },
      { text: 'Active user session and Terminal Server/Citrix detection' },
      { text: 'Network connectivity testing' },
      { text: 'Service management with dependency resolution and startup type control' },
    ],
  },
  {
    title: 'Security, Modes & Extensibility',
    icon: '/images/features/shield_checkmark.svg',
    description: 'Secure architecture, flexible deployment modes, and a fully extensible framework.',
    items: [
      { text: 'Four deployment modes: Auto, Interactive, NonInteractive, Silent' },
      {
        text: 'Client-server architecture for secure UI rendering from SYSTEM context',
        version: 'v4',
      },
      {
        text: 'No ServiceUI dependency - eliminates privilege escalation risks',
        version: 'v4',
      },
      {
        text: 'ADMX Group Policy templates for centralized enterprise control',
        version: 'v4.1',
      },
      { text: 'Full Support for ARM64 architecture' },
      { text: 'Developed to be PowerShell Strict Mode v3 compliant' },
      {
        text: 'PowerShell 5.1 and 7 dual support with digitally signed module',
        version: 'v4',
      }
    ],
  },
];
