import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SharedModule } from '@kit/shared.module';
import { NavigationModule} from '@kit/components';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    SharedModule,
    NavigationModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
