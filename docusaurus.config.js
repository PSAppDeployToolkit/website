// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  future: {
    v4: true,
    // experimental_router: 'hash',
  },
  title: 'PSAppDeployToolkit',
  tagline: 'Enterprise App Deployment, Simplified.',
  favicon: '/images/favicon.ico',
  url: 'https://psappdeploytoolkit.com',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'PSAppDeployToolkit', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  titleDelimiter: '·',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght,ROND@6..144,1..1000,0..100&family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  ],

  customFields: {
    meta: {
      description:
        'A PowerShell-based framework to simplify and standardize the process of deploying applications to endpoints in a Windows-based organization.',
    },
  },
  plugins: [],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          exclude: ['plans/**'],
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: '4.1.x',
          versions: {
            current: {
              label: '4.2.x dev',
              path: '/',
              banner: 'unreleased',
              // editUrl: 'https://github.com/psappdeploytoolkit/website/edit/main',
            },
            '4.1.x': {
              label: '4.1.x current',
              path: '4.1.x',
            },
            '4.0.x': {
              label: '4.0.x',
              path: '4.0.x',
              banner: 'unmaintained',
            },
            '3.10.2': {
              label: '3.10.x',
              path: '3.10.2',
              banner: 'unmaintained',
            },
          },
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 'ALL',
          authorsMapPath: 'authors.yml',
          onInlineAuthors: 'ignore',
        },
        sitemap: {
          ignorePatterns: ['/blog/tags/**', '/docs/tags/**', '/error/'],
        },
        gtag: {
          trackingID: 'G-KK2LXQPHKC',
        },
        googleTagManager: {
          containerId: 'GTM-KG8TQPX',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // https://github.com/easyops-cn/docusaurus-search-local#theme-options
        // 'hashed' is recommended as long-term-cache of index file is possible.
        hashed: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'psappdeploytoolkit, psadt, powershell, appdeploy, appdeployment, repackaging, apprepackaging',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      image: 'images/psadt-socialcard.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2,
      },
      docs: {
        versionPersistence: 'localStorage'
      },
      navbar: {
        title: 'PSAppDeployToolkit',
        logo: {
          alt: 'PSAppDeployToolkit',
          src: '/images/psadt-logo.svg',
        },
        items: [
          { to: 'features', label: 'Features', position: 'left' },
          { to: 'ecosystem', label: 'Ecosystem', position: 'left' },
          {
            type: 'doc',
            position: 'left',
            docId: 'introduction',
            label: 'Docs',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'reference',
            label: 'Reference',
          },
          { to: 'training', label: 'Training', position: 'left' },
          { to: 'blog', label: 'News', position: 'left' },
          { to: 'about', label: 'About', position: 'left' },

          {
            type: 'search',
            position: 'right',
          },

          {
            href: 'https://github.com/psappdeploytoolkit/psappdeploytoolkit',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'PSAppDeployToolkit',
          src: '/images/psadt-dark-sxs.svg',
          href: '/',
          width: 160,
        },
        links: [
          {
            title: 'PSAppDeployToolkit',
            items: [
              {
                label: 'Features',
                to: '/features',
              },
              {
                label: 'Ecosystem',
                to: '/ecosystem',
              },
              {
                label: 'Documentation',
                to: '/docs/introduction',
              },
              {
                label: 'Reference',
                to: '/docs/reference',
              },
              {
                label: 'Training',
                to: '/training',
              },
              {
                label: 'News',
                to: '/blog',
              },
              {
                label: 'About',
                to: '/about',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discourse Forum',
                href: 'https://discourse.psappdeploytoolkit.com',
              },
              {
                label: 'Discord Chat (WinAdmins)',
                href: 'https://discord.com/channels/618712310185197588/627204361545842688',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/psadt',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Privacy Policy',
                to: '/privacy-policy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PSAppDeployToolkit Team.\nBuilt with ❤️ and 🦖 by Dan, Sean, Mo, Mitch, and Other Dan 😁.`,
      },
      prism: {
        additionalLanguages: ['powershell'],
        theme: prismThemes.github,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;
