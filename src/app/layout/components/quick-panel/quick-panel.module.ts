import { NgModule } from '@angular/core';
import { MatDividerModule, MatListModule, MatSlideToggleModule } from '@angular/material';
import { SharedModule } from '@kit/shared.module';
import { QuickPanelComponent } from './quick-panel.component';

@NgModule({
  declarations: [
    QuickPanelComponent
  ],
  imports: [
    MatDividerModule,
    MatListModule,
    MatSlideToggleModule,

    SharedModule
  ],
  exports: [
    QuickPanelComponent
  ]
})
export class QuickPanelModule { }
