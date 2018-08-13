import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarModule } from '@kit/components';
import { SharedModule } from '@kit/shared.module';

import { ContentModule } from '../../components/content/content.module';
import { FooterModule } from '../../components/footer/footer.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { QuickPanelModule } from '../../components/quick-panel/quick-panel.module';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';

import {VerticalLayout1Component} from './vertical-layout1.component';

@NgModule({
  declarations: [
    VerticalLayout1Component
  ],
  imports: [
    RouterModule,
    SidebarModule,
    SharedModule,
    ContentModule,
    FooterModule,
    NavbarModule,
    QuickPanelModule,
    ToolbarModule
  ],
  exports: [
    VerticalLayout1Component
  ]
})
export class VerticalLayout1Module { }
