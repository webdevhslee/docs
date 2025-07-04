// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MangoBoost Docs',
  tagline: 'Comprehensive resources for deploying high-performance AI inference and acceleration.',
  favicon: 'img/favicon.ico',

  // Production URL for the MangoBoost documentation site
  url: 'https://docs.mangoboost.io',
  baseUrl: '/',

  // Organization and repo name for deployment (optional if not using GitHub pages)
  organizationName: 'MangoBoost, Inc.',
  projectName: 'MangoBoost Documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          path: 'docs_llmboost',
          routeBasePath: 'llmboost',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        pages: {},
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk',
        path: 'docs_sdk',
        routeBasePath: 'sdk',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/MangoBoost_Logo.png',
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'MangoBoost Logo',
          src: 'img/MangoBoost_Logo.png',
        },
        items: [
          {
            to: '/llmboost',
            label: 'LLMBoost',
            position: 'left',
          },
          {
            to: '/sdk',
            label: 'SDK',
            position: 'left',
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
                to: '/llmboost',
                label: 'LLMBoost',
              },
              {
                to: '/sdk',
                label: 'SDK',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/mangoboost/',
              },
              {
                label: 'X',
                href: 'https://x.com/mangoboost_inc',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Datacenter Acceleration',
                href: 'https://www.mangoboost.io',
              },
              {
                label: 'Contact Support',
                href: 'https://www.mangoboost.io/contact',
              },
              {
                label: 'Contact Sales',
                href: 'https://www.mangoboost.io/contact',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MangoBoost, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
