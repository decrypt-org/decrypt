// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Decrypt',
  tagline: 'Open-source cryptographic primitives and implementation guides.',
  favicon: 'img/Decrypt_logo.png', 

  future: {
    v4: true, 
  },

  // 🚀 GitHub Pages Deployment Config
  url: 'https://mayendradwika.github.io',
  baseUrl: '/decrypt/', // IMPORTANT: Change this if your actual repository name is different
  organizationName: 'mayendradwika', 
  projectName: 'decrypt', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.js',
          // Maps the "Edit this page" links directly to your repo
          editUrl: 'https://github.com/mayendradwika/decrypt/tree/main/',
        },
        blog: false, // Disabled to focus purely on the docs architecture
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark', // Forces dark mode for that cyber/terminal aesthetic
        disableSwitch: false, 
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Decrypt Logo',
          src: '/img/Decrypt_logo.png', // Swap this out with a lock or key SVG later
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/mayendradwika/decrypt',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Architecture',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Foundational Math',
                to: '/docs/foundations/modular-arithmetic', // We will build this next
              },
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'discrete-sh',
                href: 'https://mayendradwika.github.io', 
              },
            ],
          },
          {
            title: 'Repository',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mayendradwika/decrypt',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mayendra Dwika. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula, // Dracula is excellent for reading crypto/math code blocks
      },
    }),
};

export default config;  