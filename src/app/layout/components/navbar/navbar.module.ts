import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SharedModule } from '@kit/shared.module';
import { NavigationModule} from '@kit/components';
import { NavbarComponent } from './navbar.component';
import { Hstyle1Module} from './horizontal/hstyle1/hstyle1.module';
import { Vstyle1Module} from './vertical/vstyle1/vstyle1.module';
import { Vstyle2Module} from './vertical/vstyle2/vstyle2.module';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    SharedModule,
    NavigationModule,
    Hstyle1Module,
    Vstyle1Module,
    Vstyle2Module
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
