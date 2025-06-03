import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  workbookSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro/overview',
        'intro/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Discover',
      items: [
        'discover/mission',
        'discover/tools',
      ],
    },
    {
      type: 'category',
      label: 'Discern',
      items: [
        'discern/plan',
        'discern/decisions',
      ],
    },
    {
      type: 'category',
      label: 'Develop',
      items: [
        'develop/progress',
        'develop/resources',
      ],
    },
  ],
};

export default sidebars;
