import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation'],
    },
    {
      type: 'category',
      label: 'CLI',
      items: ['cli/commands'],
    },
    {
      type: 'category',
      label: 'SDK',
      items: ['sdk/overview'],
    },
    {
      type: 'category',
      label: 'UI Components',
      items: ['ui/components'],
    },
    {
      type: 'category',
      label: 'Templates',
      items: ['templates/overview'],
    },
    {
      type: 'category',
      label: 'Examples',
      items: ['examples/overview'],
    },
    'faq/index',
    'troubleshooting/index',
    'architecture/index',
    'contributing/index',
  ],
};

export default sidebars;
