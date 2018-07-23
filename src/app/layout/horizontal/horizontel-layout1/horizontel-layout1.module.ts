import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { SharedModule } from '../../../../@kit/shared.module';
import {SidebarModule, ThemeOptionsModule} from '@kit/components';

import { ContentModule } from '../../components/content/content.module';
import { FooterModule } from '../../components/footer/footer.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { QuickPanelModule } from '../../components/quick-panel/quick-panel.module';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';

import {HorizontelLayout1Component} from './horizontel-layout1.component';

@NgModule({
  imports: [
    MatSidenavModule,
    SharedModule,
    SidebarModule,
    ThemeOptionsModule,
    ContentModule,
    FooterModule,
    NavbarModule,
    QuickPanelModule,
    ToolbarModule
  ],
  exports: [
    HorizontelLayout1Component
  ],
  declarations: [
    HorizontelLayout1Component
  ]
})
export class HorizontelLayout1Module { }
