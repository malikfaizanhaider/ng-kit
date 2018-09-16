import {KitNavigation} from '@kit/types';


export const navigation: KitNavigation[] = [
  {
    id       : 'applications',
    title    : 'Applications',
    translate: 'NAV.APPLICATIONS',
    type     : 'group',
    icon     : 'apps',
    children : [
      {
        id       : 'dashboards',
        title    : 'Dashboards',
        translate: 'NAV.DASHBOARDS',
        type     : 'collapsable',
        icon     : 'dashboard',
        children : [
          {
            id   : 'analytics',
            title: 'Analytics',
            type : 'item',
            url  : '/apps/dashboards/analytics'
          },
          {
            id   : 'project',
            title: 'Project',
            type : 'item',
            url  : '/apps/dashboards/project'
          }
        ]
      }
    ]
  }
];
