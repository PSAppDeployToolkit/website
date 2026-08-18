export const versionDocMappings = [
  {
    current: 'how-to/brand-the-user-interface',
    '4.1.x': 'usage/adding-ui-elements',
    '4.0.x': 'usage/adding-ui-elements',
    '3.10.2': 'usage/adding-ui-elements',
  },
  {
    current: 'how-to/configure-with-group-policy',
    '4.1.x': 'usage/admx-templates',
  },
  {
    current: 'how-to/create-a-deployment',
    '4.1.x': 'getting-started/creating-a-new-deployment',
    '4.0.x': 'getting-started/creating-a-new-deployment',
  },
  {
    current: 'how-to/customize-a-deployment',
    '4.1.x': 'usage/customizing-deployments',
    '4.0.x': 'usage/customizing-deployments',
    '3.10.2': 'usage/customizing-deployments',
  },
  {
    current: 'how-to/deploy-an-msi-with-zero-config',
    '4.1.x': 'deployment-concepts/zero-config-deployment',
    '4.0.x': 'deployment-concepts/zero-config-deployment',
    '3.10.2': 'understanding-the-layout/zero-config-deployment',
  },
  {
    current: 'how-to/install-applications',
    '4.1.x': 'usage/installing-applications',
  },
  {
    current: 'how-to/install-the-toolkit',
    '4.1.x': 'getting-started/download',
    '4.0.x': 'getting-started/download',
    '3.10.2': 'getting-started/download',
  },
  {
    current: 'how-to/run-a-deployment',
    '4.1.x': 'usage/how-to-deploy',
    '4.0.x': 'usage/how-to-deploy',
    '3.10.2': 'usage/how-to-deploy',
  },
  {
    current: 'how-to/upgrade-from-v3',
    '4.1.x': 'getting-started/upgrade-guidance-v3x-to-v41',
    '4.0.x': 'getting-started/migrating-from-v3',
  },
  {
    current: 'how-to/upgrade-from-v4-0',
    '4.1.x': 'getting-started/upgrade-guidance-4x-to-v41',
  },
  {
    current: 'how-to/set-the-log-path-with-group-policy',
    '4.1.x': 'examples/admxtemplate-LogPath',
  },
  {
    current: 'explanation/the-deployment-script',
    '4.1.x': 'deployment-concepts/invoke-appdeploytoolkit',
    '4.0.x': 'deployment-concepts/invoke-appdeploytoolkit',
    '3.10.2': 'understanding-the-layout/deployment-script',
  },
  {
    current: 'reference/deployment-template',
    '4.1.x': 'deployment-concepts/deployment-structure',
    '4.0.x': 'deployment-concepts/deployment-structure',
    '3.10.2': 'understanding-the-layout/extracted-archive',
  },
  {
    current: 'reference/faq',
    '4.1.x': 'getting-started/faq',
    '4.0.x': 'getting-started/faq',
  },
  {
    current: 'reference/requirements',
    '4.1.x': 'getting-started/requirements',
    '4.0.x': 'getting-started/requirements',
    '3.10.2': 'getting-started/requirements',
  },
  {
    current: 'reference/licensing',
    '4.1.x': 'getting-started/licensing',
    '4.0.x': 'getting-started/licensing',
    '3.10.2': 'getting-started/licensing',
  },
  {
    current: 'reference/release-notes',
    '4.1.x': 'getting-started/release-notes',
    '4.0.x': 'getting-started/changes-in-v4',
  },
];

export function findVersionDocMapping(docId) {
  return versionDocMappings.find((entry) => Object.values(entry).includes(docId));
}
