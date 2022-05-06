import { ISideNavItem } from '../interfaces';

export const sideNavMenuConfig: ISideNavItem[] = [
  {
    id: 1,
    parentId: null,
    name: 'Home',
    url: '/home',
    icon: 'home'
  },
  {
    id: 2,
    parentId: null,
    name: 'Explorer',
    url: null,
    icon: 'travel_explore'
  },
  {
    id: 3,
    parentId: 2,
    name: 'Inventory',
    url: '/explorer/inventory',
    icon: null,
  },
  {
    id: 4,
    parentId: 2,
    name: 'Visualizer',
    url: '/explorer/visualizer',
    icon: null,
  },
  {
    id: 5,
    parentId: null,
    name: 'Posture',
    url: null,
    icon: 'construction',
  },
  {
    id: 6,
    parentId: 5,
    name: 'Overview',
    url: '/posture/overview',
    icon: null,
  },
  {
    id: 7,
    parentId: 5,
    name: 'Compliance',
    url: '/posture/compliance',
    icon: null,
  },
  {
    id: 8,
    parentId: 5,
    name: 'Vulnerabilities',
    url: '/posture/vulnerabilities',
    icon: null,
  },
  {
    id: 9,
    parentId: 5,
    name: 'RBAC',
    url: '/posture/rbac',
    icon: null,
  },
  {
    id: 10,
    parentId: null,
    name: 'Runtime',
    url: null,
    icon: 'stars'
  }
];
