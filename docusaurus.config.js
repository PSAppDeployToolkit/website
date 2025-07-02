// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  future: {
    v4: true
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
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
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
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: '4.0',
              banner: 'none',
              // editUrl: 'https://github.com/psappdeploytoolkit/website/docs/edit/main',
            },
            '3.10.2': {
              label: '3.10.2',
              path: '3.10.2',
            },
          },
        },
        blog: {
          showReadingTime: false,
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
      // announcementBar: {
      // id: 'support_us',
      // content:
      //   'Watch the <a target="_blank" rel="noopener noreferrer" href="https://patchmypc.com/psappdeploytoolkit-v4-launch-webinar">PSADT v4 launch webinar</a> to see the new features and changes, then find out how to download the new version in our <a target="_blank" rel="noopener noreferrer" href="https://psappdeploytoolkit.com/docs/category/getting-started">Getting Started</a> guide.',
      // backgroundColor: '#0081c6',
      // textColor: '#fff',
      // isCloseable: true,
      // },
      navbar: {
        title: 'PSAppDeployToolkit',
        logo: {
          alt: 'PSAppDeployToolkit',
          src: '/images/psadt-light-navheader.svg',
          srcDark: '/images/psadt-dark-navheader.svg',
        },
        items: [
          { to: 'features', label: 'Features', position: 'left' },
          // {
          //   label: "Docs",
          //   to: "/docs",
          //   items: [
          //       {
          //       label: "Getting Started",
          //         to: "/docs/getting-started/requirements",
          //       },
          //       {
          //         label: "Reference",
          //         to: "/docs/reference",
          //       },
          //   ],
          //   position: "left"
          // },
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
          // {
          //   href: 'https://github.com/psappdeploytoolkit/psappdeploytoolkit/releases',
          //   label: 'Download',
          //   position: 'left',
          // },
          { to: 'blog', label: 'News', position: 'left' },
          { to: 'about', label: 'About', position: 'left' },

          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'search',
            position: 'right',
          },

          {
            href: 'https://github.com/psappdeploytoolkit/psappdeploytoolkit',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'PSAppDeployToolkit',
            items: [
              {
                label: 'Features',
                to: '/features',
              },
              {
                label: 'Documentation',
                to: '/docs',
              },
              {
                label: 'Reference',
                to: '/docs/reference',
              },
              {
                label: 'News',
                to: '/blog',
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
