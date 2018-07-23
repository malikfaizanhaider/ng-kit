import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SharedModule } from '@kit/shared.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
