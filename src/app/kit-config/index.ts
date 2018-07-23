import {KitConfig} from '@kit/types';

export const kitConfig: KitConfig = {
    layout          : {
        style         : 'vertical-layout-1',
        width         : 'fullwidth',
        navbar        : {
            hidden    : false,
            position  : 'left',
            folded    : false,
            background: 'mat-fuse-dark-700-bg'
        },
        toolbar       : {
            hidden    : false,
            position  : 'below-static',
            background: 'mat-white-500-bg'
        },
        footer        : {
            hidden    : true,
            position  : 'below-static',
            background: 'mat-fuse-dark-900-bg'
        }
    },
    customScrollbars: true
};
