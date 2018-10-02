import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {KitShortcutsModule} from '@kit/components';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { SharedModule } from '@kit/shared.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    KitShortcutsModule,
    SharedModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
