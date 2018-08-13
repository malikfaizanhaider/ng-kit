import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@kit/shared.module';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
