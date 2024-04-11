// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

// Used to debug production build issues faster
const isDev = !!process.env.DEVELOP;
const orgName = 'kunai-project'
const repoName = 'kunai-doc'
const editUrl = 'https://github.com/' + orgName + '/' + repoName + '/tree/main/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kunai',
  tagline: "Bring your Linux Threat-Hunting capabilities to the next level",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kunai.rocks',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: orgName, // Usually your GitHub org/user name.
  projectName: repoName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //includeCurrentVersion: isDev,
          includeCurrentVersion: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: editUrl,
          lastVersion: 'current',
          versions: {
            current: {
              label: `0.2.0`,
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: editUrl,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/kunai-social-card.jpg',
      /*
      announcementBar: {
        id: 'announcementBar-1', // Increment on change
        content: `⭐️ If you like Kunai, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/0xrawsec/kunai">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/0xrawsec">Twitter</a>`,
      },
      */
      navbar: {
        title: 'Kunai',
        logo: {
          alt: 'Kunai',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            //dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
            //dropdownActiveClassDisabled: true,
          },
          /*{
            href: 'https://github.com/sponsors/0xrawsec',
            position: 'right',
            className: 'button button--secondary',
            html: "❤️ Sponsor"
          },*/
          {
            href: 'https://github.com/' + orgName + '/',
            position: 'right',
            className: "header-github-link",
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
                label: 'Documentation',
                to: '/docs/quickstart',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/AUMaBvHvNU',
              },
              {
                label: 'Mastodon',
                href: 'https://infosec.exchange/@kunai_project',
              },
              {
                label: 'X/Twitter',
                href: 'https://twitter.com/kunai_project',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/' + orgName + '/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kunai Project, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      }
    }),
};

module.exports = config;
