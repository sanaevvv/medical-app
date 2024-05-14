import { MainNavItem, SidebarNavItem } from '@/types/types';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Find a Doctor',
      href: '/find-doctor',
    },
    {
      title: 'Telehealth Visit',
      href: '/telehealth',
    },
    {
      title: 'Inperson  Visit',
      href: '/doctors',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Be service provider',
      href: '/service',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
          items: [],
        },
        {
          title: 'Installation',
          href: '/docs/installation',
          items: [],
        },
        {
          title: 'components.json',
          href: '/docs/components-json',
          items: [],
        },
        {
          title: 'Theming',
          href: '/docs/theming',
          items: [],
        },
        {
          title: 'Dark mode',
          href: '/docs/dark-mode',
          items: [],
        },
        {
          title: 'CLI',
          href: '/docs/cli',
          items: [],
        },
        {
          title: 'Typography',
          href: '/docs/components/typography',
          items: [],
        },
        {
          title: 'Figma',
          href: '/docs/figma',
          items: [],
        },
        {
          title: 'Changelog',
          href: '/docs/changelog',
          items: [],
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Accordion',
          href: '/docs/components/accordion',
          items: [],
        },
        {
          title: 'Alert',
          href: '/docs/components/alert',
          items: [],
        },
        {
          title: 'Alert Dialog',
          href: '/docs/components/alert-dialog',
          items: [],
        },
        {
          title: 'Aspect Ratio',
          href: '/docs/components/aspect-ratio',
          items: [],
        },
        {
          title: 'Avatar',
          href: '/docs/components/avatar',
          items: [],
        },
        {
          title: 'Badge',
          href: '/docs/components/badge',
          items: [],
        },
        {
          title: 'Breadcrumb',
          href: '/docs/components/breadcrumb',
          items: [],
          label: 'New',
        },
        {
          title: 'Button',
          href: '/docs/components/button',
          items: [],
        },
        {
          title: 'Calendar',
          href: '/docs/components/calendar',
          items: [],
        },
        {
          title: 'Card',
          href: '/docs/components/card',
          items: [],
        },
        {
          title: 'Carousel',
          href: '/docs/components/carousel',
          items: [],
        },
        {
          title: 'Checkbox',
          href: '/docs/components/checkbox',
          items: [],
        },
        {
          title: 'Collapsible',
          href: '/docs/components/collapsible',
          items: [],
        },
        {
          title: 'Combobox',
          href: '/docs/components/combobox',
          items: [],
        },
        {
          title: 'Command',
          href: '/docs/components/command',
          items: [],
        },
        {
          title: 'Context Menu',
          href: '/docs/components/context-menu',
          items: [],
        },
        {
          title: 'Data Table',
          href: '/docs/components/data-table',
          items: [],
        },
        {
          title: 'Date Picker',
          href: '/docs/components/date-picker',
          items: [],
        },
        {
          title: 'Dialog',
          href: '/docs/components/dialog',
          items: [],
        },
        {
          title: 'Drawer',
          href: '/docs/components/drawer',
          items: [],
        },
        {
          title: 'Dropdown Menu',
          href: '/docs/components/dropdown-menu',
          items: [],
        },
        {
          title: 'Form',
          href: '/docs/components/form',
          items: [],
        },
        {
          title: 'Hover Card',
          href: '/docs/components/hover-card',
          items: [],
        },
      ],
    },
  ],
};
