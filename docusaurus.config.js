// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jimmer, the most advanced ORM of JVM',
  tagline: 'Supports both java & kotlin',
  url: 'https://github.com',
  baseUrl: '/jimmer-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',
  favicon: 'https://raw.githubusercontent.com/babyfish-ct/jimmer-doc/main/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'babyfish-ct', // Usually your GitHub org/user name.
  projectName: 'jimmer-doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  themes:[
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            if (locale === 'zh') {
              return `https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/${docPath}`
            }
            return `https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/${docPath}`
          },
          showLastUpdateTime: true,
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins:[
    [
      'content-docs',
      {
        id: 'faq',
        path: 'faq',
        routeBasePath: 'faq',
        sidebarPath: require.resolve('./sidebars-faq.js'),
        showLastUpdateTime: true,
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale === 'zh') {
            return `https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-faq/current/${docPath}`
          }
          return `https://github.com/babyfish-ct/jimmer-doc/edit/main/faq/${docPath}`
        },
      },
    ]
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: 'Jimmer documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'https://raw.githubusercontent.com/babyfish-ct/jimmer-doc/main/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'overview/introduction',
          position: 'left',
          label: 'View more',
        },
        {
          to: '/faq',
          position: 'left',
          label: 'FAQ',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          type: "search",
          position: 'right'
        },
        {
          href: 'https://github.com/babyfish-ct/jimmer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/overview/introduction',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} jimmer, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'kotlin', 'sql', 'groovy', 'cpp', 'kotlin', 'graphql', 'json', 'csharp']
    },
  })
};

module.exports = config;
