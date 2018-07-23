import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import {KIT_CONFIG, ConfigService} from './services/config.service';

@NgModule({
  imports: [],
  providers: [ConfigService],
  declarations: []
})
export class KitModule {
  constructor(@Optional() @SkipSelf() parentModule: KitModule) {
    if (parentModule) {
      throw new Error('Angular-Kit already loaded. Please import in AppModule.td onle!');
    }
  }

  static forRoot(config): ModuleWithProviders {
    return {
      ngModule: KitModule,
      providers: [
        {
          provide : KIT_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
