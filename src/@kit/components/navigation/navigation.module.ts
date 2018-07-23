import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { NavigationComponent } from './navigation.component';
import { HorizontalCollapsableComponent } from './horizontal/horizontal-collapsable/horizontal-collapsable.component';
import { HorizontalItemComponent } from './horizontal/horizontal-item/horizontal-item.component';
import { VerticalItemComponent } from './vertical/vertical-item/vertical-item.component';
import { VerticalCollapsableComponent } from './vertical/vertical-collapsable/vertical-collapsable.component';
import { VerticalGroupComponent } from './vertical/vertical-group/vertical-group.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatRippleModule,
    TranslateModule.forChild()
  ],
  exports: [
    NavigationComponent
  ],
  declarations: [
    NavigationComponent,
    HorizontalCollapsableComponent,
    HorizontalItemComponent,
    VerticalItemComponent,
    VerticalCollapsableComponent,
    VerticalGroupComponent]
})
export class NavigationModule { }
