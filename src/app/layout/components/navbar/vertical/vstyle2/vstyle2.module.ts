import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { NavigationModule } from '@kit/components';
import { SharedModule } from '@kit/shared.module';

import { Vstyle2Component} from './vstyle2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    NavigationModule,
  ],
  exports: [
    Vstyle2Component
  ],
  declarations: [
    Vstyle2Component
  ]
})
export class Vstyle2Module { }
