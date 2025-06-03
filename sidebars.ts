import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  workbookSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Discover',
      items: [
        'discover/index',
        'discover/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Discern',
      items: [
        'discern/index',
        'discern/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Develop',
      items: [
        'develop/index',
        'develop/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Demonstrate',
      items: [
        'demonstrate/index',
        'demonstrate/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Prepare',
      items: [
        'prepare/index',
        'prepare/teams',
        'prepare/projects',
        'prepare/resources',
        'prepare/timeline',
      ],
    },
  ],
};

export default sidebars;
