import {KitConfig} from '@kit/types';

export const kitConfig: KitConfig = {
    layout          : {
        style         : 'app-vertical-layout1',
        width         : 'fullwidth',
        navbar        : {
          background: 'mat-fuse-dark-700-bg',
          folded    : false,
          hidden    : false,
          position  : 'left',
          variant   : 'vertical-style-1'
        },
        toolbar       : {
          background: 'mat-white-500-bg',
          hidden    : false,
          position  : 'below-static'
        },
        footer        : {
          background: 'mat-fuse-dark-900-bg',
          hidden    : false,
          position  : 'below-fixed'
        },
        sidepanel: {
          hidden  : false,
          position: 'right'
        }
    },
    customScrollbars: true
};
