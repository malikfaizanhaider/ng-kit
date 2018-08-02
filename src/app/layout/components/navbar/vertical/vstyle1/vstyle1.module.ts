import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NavigationModule } from '@kit/components';
import { SharedModule } from '@kit/shared.module';

import { Vstyle1Component} from './vstyle1.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    NavigationModule,
    SharedModule
  ],
  exports: [
    Vstyle1Component
  ],
  declarations: [
    Vstyle1Component
  ]
})
export class Vstyle1Module { }
