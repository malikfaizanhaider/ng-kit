import {Component, Inject} from '@angular/core';
import {KitNavigation} from '@kit/types';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export const navigation: KitNavigation[] = [{
  id       : 'board_list',
  title    : 'Board_List',
  translate: 'Board List',
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
    },
    {
      id       : 'e-commerce',
      title    : 'E-Commerce',
      translate: 'NAV.ECOMMERCE',
      type     : 'collapsable',
      icon     : 'shopping_cart',
      children : [
        {
          id   : 'dashboard',
          title: 'Dashboard',
          type : 'item',
          url  : '/apps/e-commerce/dashboard'
        },
        {
          id        : 'products',
          title     : 'Products',
          type      : 'item',
          url       : '/apps/e-commerce/products',
          exactMatch: true
        },
        {
          id        : 'productDetail',
          title     : 'Product Detail',
          type      : 'item',
          url       : '/apps/e-commerce/products/1/printed-dress',
          exactMatch: true
        },
        {
          id        : 'orders',
          title     : 'Orders',
          type      : 'item',
          url       : '/apps/e-commerce/orders',
          exactMatch: true
        },
        {
          id        : 'orderDetail',
          title     : 'Order Detail',
          type      : 'item',
          url       : '/apps/e-commerce/orders/1',
          exactMatch: true
        }
      ]
    },
    {
      id       : 'academy',
      title    : 'Academy',
      translate: 'NAV.ACADEMY',
      type     : 'item',
      icon     : 'school',
      url      : '/apps/academy'
    },
    {
      id       : 'boards',
      title    : 'NAV.BOARDLIST',
      type     : 'collapsable',
      icon     : 'dashboard',
      children : [
        {
          id       : 'board_template',
          title    : 'Template Board',
          type     : 'item',
          icon     : 'developer_board',
          url      : '#',
        },
        {
          id   : 'create_folder',
          title: 'NAV.CREATE_NEW_FOLDER',
          type : 'item',
          icon : 'add',
          function: () => {
            // let dialogRef = dialog.open(DialogCreateFolder, {
            //     width: '250px',
            //   });
            alert('create new folder');
          }
        },
      ]
    },
    {
      id       : 'mail',
      title    : 'Mail',
      translate: 'Inbox',
      type     : 'item',
      icon     : 'email',
      url      : '/apps/mail',
      // badge    : {
      //     title    : '25',
      //     translate: 'NAV.MAIL.BADGE',
      //     bg       : '#F44336',
      //     fg       : '#FFFFFF'
      // }
    },
    {
      id       : 'calendar',
      title    : 'Calendar',
      translate: 'NAV.CALENDAR',
      type     : 'item',
      icon     : 'today',
      url      : '/apps/calendar'
    },
    {
      id       : 'file-manager',
      title    : 'File Manager',
      translate: 'NAV.FILE_MANAGER',
      type     : 'item',
      icon     : 'folder',
      url      : '/apps/file-manager'
    },
  ]
}];
