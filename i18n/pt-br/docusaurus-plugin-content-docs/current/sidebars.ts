/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  workbookSidebar: [
    {
      type: 'category',
      label: 'Introdução',
      items: [
        'intro/overview',
        'intro/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Descobrir',
      items: [
        'discover/mission',
        'discover/tools',
      ],
    },
    {
      type: 'category',
      label: 'Discernir',
      items: [
        'discern/plan',
        'discern/decisions',
      ],
    },
    {
      type: 'category',
      label: 'Desenvolver',
      items: [
        'develop/progress',
        'develop/resources',
      ],
    },
  ],
};

export default sidebars;
