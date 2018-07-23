import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@kit/shared.module';
import { ContentComponent } from './content.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    ContentComponent
  ],
  declarations: [ContentComponent]
})
export class ContentModule { }
