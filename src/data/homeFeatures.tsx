export interface HomeFeature {
  readonly title: string;
  readonly icon: string;
  readonly description: string;
}

export const homeFeatures: readonly HomeFeature[] = [
  {
    title: 'User Interface & Dialogs',
    icon: '/images/features/application_window.png',
    description:
      'Modern Fluent UI with light/dark mode, branded dialogs, deferrals, countdown timers, and multi-language localization \u2014 out of the box.',
  },
  {
    title: 'Enterprise Platform Integration',
    icon: '/images/features/satellites.svg',
    description:
      'First-class support for Intune, ConfigMgr, and endpoint management platforms with standardized deployment flows and exit code handling.',
  },
  {
    title: 'Application Lifecycle',
    icon: '/images/features/construction_worker_beard_long.svg',
    description:
      'Manage every stage from discovery through removal \u2014 MSI, EXE, and zero-config deployments with Pre/Main/Post phases.',
  },
  {
    title: 'Security, Modes & Extensibility',
    icon: '/images/features/shield_checkmark.svg',
    description:
      'Four deployment modes, client-server architecture for secure SYSTEM context, ADMX Group Policy templates, and a fully extensible module system.',
  },
];
