import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  workbookSidebar: [
    {
      type: 'category',
      label: 'Introdução',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Descobrir',
      items: [
        'discover/index',
        'discover/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Discernir',
      items: [
        'discern/index',
        'discern/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Desenvolver',
      items: [
        'develop/index',
        'develop/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Demonstrar',
      items: [
        'demonstrate/index',
        'demonstrate/exercises',
      ],
    },
    {
      type: 'category',
      label: 'Preparar',
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
