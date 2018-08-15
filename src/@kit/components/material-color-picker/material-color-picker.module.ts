import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatRippleModule } from '@angular/material';
import { KitPipesModule } from '@kit/pipes/pipes.module';

import { KitMaterialColorPickerComponent } from '@kit/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        KitMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatRippleModule,

        KitPipesModule
    ],
    exports: [
        KitMaterialColorPickerComponent
    ],
})
export class KitMaterialColorPickerModule
{
}
