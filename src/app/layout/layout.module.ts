import { NgModule } from '@angular/core';
import {VerticalLayout1Module} from './vertical/vertical-layout1/vertical-layout1.module';
import {VerticalLayout2Module} from './vertical/vertical-layout2/vertical-layout2.module';
import {VerticalLayout3Module} from './vertical/vertical-layout3/vertical-layout3.module';

import {HorizontelLayout1Module} from './horizontal/horizontel-layout1/horizontel-layout1.module';

@NgModule({
  imports: [
    VerticalLayout1Module,
    VerticalLayout2Module,
    VerticalLayout3Module,
    HorizontelLayout1Module
  ],
  exports: [
    VerticalLayout1Module,
    VerticalLayout2Module,
    VerticalLayout3Module,
    HorizontelLayout1Module
  ],
  declarations: []
})
export class LayoutModule { }
