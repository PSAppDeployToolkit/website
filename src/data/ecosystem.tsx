export const SOLUTION_WORKS_WITH = [
  'ConfigMgr',
  'Intune',
  'Standalone'
] as const;

export const SOLUTION_CATEGORIES = [
  'Software Update Catalog',
  'App Repackaging',
  'Package Authoring',
  'Deployment Automation',
  'Readiness & Testing',
  'Packaging Services',
] as const;

type SolutionWorksWith = (typeof SOLUTION_WORKS_WITH)[number];
type SolutionCategory = (typeof SOLUTION_CATEGORIES)[number];

export interface Solution {
  name: string;
  featured: boolean;
  logo?: string;
  logoDark?: string;
  url: string;
  description: string;
  type: 'commercial' | 'free';
  worksWith: SolutionWorksWith[];
  categories: SolutionCategory[];
}

export const solutions: Solution[] = [
  {
    name: 'Patch My PC',
    featured: true,
    logo: '/images/solutions/pmpc_light.png',
    logoDark: '/images/solutions/pmpc_dark.png',
    url: 'https://patchmypc.com/',
    description: 'Automation of 3rd party software updates for ConfigMgr and Intune. Stewards of PSAppDeployToolkit.',
    type: 'commercial',
    worksWith: ['ConfigMgr', 'Intune'],
    categories: ['Software Update Catalog', 'Deployment Automation'],
  },
  {
    name: 'Master Packager',
    featured: false,
    logo: '/images/solutions/masterpackager.png',
    url: 'https://www.masterpackager.com',
    description: 'Everything you need to create professional, modern Windows installer packages.',
    type: 'free',
    worksWith: ['ConfigMgr', 'Intune', 'Standalone'],
    categories: ['App Repackaging', 'Package Authoring'],
  },
  {
    name: 'Devicie', // cspell:disable-line
    featured: false,
    logo: '/images/solutions/devicie_light.png',
    logoDark: '/images/solutions/devicie_dark.png',
    url: 'https://devicie.com',
    type: 'commercial',
    description: 'Intune Automation, Management & Visibility Platform which leverages PSADT for App Deployment.',
    worksWith: ['ConfigMgr', 'Intune'],
    categories: ['Software Update Catalog', 'Deployment Automation', 'Packaging Services'],
  },
  {
    name: 'PacKit',
    featured: false,
    logo: '/images/solutions/packit.png',
    url: 'https://www.getpackit.com',
    type: 'commercial',
    description:
      'Windows-based tool designed for centralized post-packaging configuration and deployment. Part of Advanced Installer suite.',
    worksWith: ['ConfigMgr', 'Intune'],
    categories: ['App Repackaging', 'Package Authoring'],
  },
  {
    featured: false,
    name: 'Robopack',
    logo: '/images/solutions/robopack.png',
    url: 'https://robopack.com',
    type: 'commercial',
    description:
      'Package conversion and management tool for Intune - converts MSI / WinGet packages to PSADT scripts and manages Intune deployment.',
    worksWith: ['Intune'],
    categories: ['Software Update Catalog', 'App Repackaging', 'Deployment Automation'],
  },
  {
    name: 'Flexera AdminStudio',
    featured: false,
    logo: '/images/solutions/flexera_light.png',
    logoDark: '/images/solutions/flexera_dark.png',
    url: 'https://www.flexera.com/products/adminstudio',
    type: 'commercial',
    description: 'Packaging tool with automatic wrapping as PSADT deployment capabilities.',
    worksWith: ['ConfigMgr', 'Intune'],
    categories: ['App Repackaging', 'Package Authoring'],
  },
  {
    name: 'Juriba App Readiness',
    featured: false,
    logo: '/images/solutions/juriba_light.png',
    logoDark: '/images/solutions/juriba_dark.png',
    url: 'https://juriba.com/',
    type: 'commercial',
    description: 'Packaging and testing framework which leverages PSADT for app deployment.',
    worksWith: ['ConfigMgr', 'Intune'],
    categories: ['App Repackaging', 'Readiness & Testing'],
  },
  {
    name: 'neo42 Package Depot',
    featured: false,
    logo: '/images/solutions/neo42.png',
    url: 'https://www.neo42.de/',
    type: 'commercial',
    description:
      'Delivers PSADT-based application packages ready for customer import. Uses Neo42 Extensions for PSADT.',
    worksWith: ['ConfigMgr', 'Intune'],
    categories: ['Software Update Catalog', 'App Repackaging'],
  },
  {
    name: 'Pckgr for Intune',
    featured: false,
    logo: '/images/solutions/pckgr.png',
    url: 'https://pckgr.com',
    type: 'commercial',
    description: 'Cloud packaging automation that exports PSADT-powered apps directly into Intune.',
    worksWith: ['Intune'],
    categories: ['Software Update Catalog', 'App Repackaging'],
  },
  {
    name: 'Raynet RayPack Studio',
    featured: false,
    logo: '/images/solutions/raynet_light.png',
    logoDark: '/images/solutions/raynet_dark.png',
    url: 'https://raynet-inc.com/software-packaging/raypack-studio',
    type: 'commercial',
    description: 'RayPack Studio accelerates enterprise packaging with PSADT templates and deployment workflows.',
    worksWith: ['ConfigMgr', 'Intune'],
    categories: ['App Repackaging', 'Deployment Automation'],
  },
  {
    name: 'Apptimized Workspace',
    featured: false,
    logo: '/images/solutions/apptimized.png',
    url: 'https://apptimized.com/en/product/packaging-tool',
    type: 'commercial',
    description: 'Cloud-based application packaging tool, exports PSADT deployment scripts.',
    worksWith: ['Intune'],
    categories: ['Readiness & Testing'],
  },
  {
    name: 'xoap.io Package Wizard',
    featured: false,
    logo: '/images/solutions/xoap.png',
    url: 'https://xoap.io/psadt-package-wizard',
    type: 'commercial',
    description: 'IT Automation platform with GUI for creation of PSADT deployment scripts.',
    worksWith: ['Standalone'],
    categories: ['Deployment Automation'],
  },
  {
    name: 'Deployment Editor',
    featured: false,
    logo: '/images/solutions/deploymenteditor_light.png',
    logoDark: '/images/solutions/deploymenteditor_dark.png',
    url: 'https://blog.tugi.ch/deployment-editor-download',
    type: 'free',
    description: 'Package Windows applications or create any task for enterprise deployment. No coding needed.',
    worksWith: ['Standalone', 'Intune'],
    categories: ['Package Authoring', 'Deployment Automation'],
  },
  {
    name: 'CANCOM Packaging PowerBench',
    featured: false,
    logo: '/images/solutions/cancom_ppb.png',
    url: 'https://www.cancom.de/en/solutions/cancom-products/cancom-packaging-powerbench/',
    type: 'commercial',
    description: 'Graphical No-Code / Low-Code package authoring. Convert Ivanti DSM packages to PowerShell. Automate Winget package creation.',
    worksWith: ['Standalone', 'Intune', 'ConfigMgr'],
    categories: ['Package Authoring', 'Deployment Automation', 'App Repackaging', 'Software Update Catalog'],
  },
  {
    name: 'PSADT-Package Forge', // cspell:disable-line
    featured: false,
    logo: '/images/solutions/psadt-packageforge_light.png',
    logoDark: '/images/solutions/psadt-packageforge_dark.png',
    url: 'https://www.psadt-packageforge.com/pricing/',
    type: 'commercial',
    description: 'PSADT - Package Forge offers an efficient and modern solution for anyone who wants to create PSAppDeployToolkit packages quickly, reliably, and to the highest quality standards.', // cspell:disable-line
    worksWith: ['Standalone', 'Intune'],
    categories: ['App Repackaging', 'Package Authoring', 'Deployment Automation', 'Readiness & Testing'],
  },
];
