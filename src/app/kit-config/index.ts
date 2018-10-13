import {KitConfig} from '@kit/types';

export const kitConfig: KitConfig = {
  // Color themes can be defined in src/app/app.theme.scss
  colorTheme      : 'theme-default',
  customScrollbars: true,
  layout          : {
    style    : 'app-vertical-layout1',
    width    : 'fullwidth',
    navbar   : {
      primaryBackground  : 'fuse-navy-700',
      secondaryBackground: 'fuse-navy-900',
      folded             : false,
      hidden             : false,
      position           : 'left',
      variant            : 'vertical-style-1'
    },
    toolbar  : {
      customBackgroundColor: false,
      background           : 'fuse-white-500',
      hidden               : false,
      position             : 'below-static'
    },
    footer   : {
      customBackgroundColor: true,
      background           : 'fuse-navy-900',
      hidden               : false,
      position             : 'below-fixed'
    },
    sidepanel: {
      hidden  : false,
      position: 'right'
    }
  }
};
