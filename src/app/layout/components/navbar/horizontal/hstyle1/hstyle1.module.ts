import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { NavigationModule} from '@kit/components';
import { SharedModule } from '@kit/shared.module';

import { Hstyle1Component } from './hstyle1.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    SharedModule,
    NavigationModule
  ],
  exports: [
    Hstyle1Component
  ],
  declarations: [
    Hstyle1Component
  ]
})
export class Hstyle1Module { }
