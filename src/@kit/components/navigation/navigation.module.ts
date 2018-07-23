import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { NavigationComponent } from './navigation.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatRippleModule,
    TranslateModule.forChild()
  ],
  declarations: [NavigationComponent]
})
export class NavigationModule { }
