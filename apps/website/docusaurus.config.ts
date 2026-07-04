import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'StellarPilot',
  tagline: 'The open-source toolkit for building production-ready Stellar & Soroban applications',
  favicon: 'img/favicon.svg',
  url: 'https://supreme2580.github.io',
  baseUrl: '/soroban-pilot/',
  organizationName: 'supreme2580',
  projectName: 'soroban-pilot',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/supreme2580/soroban-pilot/edit/master/apps/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'StellarPilot',
      logo: {
        alt: 'StellarPilot Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs' },
        {
          href: 'https://github.com/supreme2580/soroban-pilot',
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
            { label: 'Getting Started', to: '/docs/getting-started/installation' },
            { label: 'CLI Reference', to: '/docs/cli/commands' },
            { label: 'SDK API', to: '/docs/sdk/overview' },
            { label: 'UI Components', to: '/docs/ui/components' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub Issues', href: 'https://github.com/supreme2580/soroban-pilot/issues' },
            {
              label: 'Discussions',
              href: 'https://github.com/supreme2580/soroban-pilot/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [{ label: 'GitHub', href: 'https://github.com/supreme2580/soroban-pilot' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StellarPilot. MIT License.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['rust', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
