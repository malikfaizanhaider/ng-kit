import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule,
         MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';

import { DirectivesModule } from '@kit/directives/directives';
import { SidebarModule } from '@kit/components/sidebar/sidebar.module';
import { KitMaterialColorPickerModule} from '@kit/components/material-color-picker/material-color-picker.module';

import { ThemeOptionsComponent} from '@kit/components/theme-options/theme-options.component';


@NgModule({
  declarations: [ThemeOptionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,

    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,

    DirectivesModule,
    KitMaterialColorPickerModule,
    SidebarModule
  ],
  exports: [ThemeOptionsComponent]
})
export class ThemeOptionsModule { }
