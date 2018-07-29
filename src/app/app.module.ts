import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { KitModule } from '../@kit/kit.module';
import { SharedModule } from '../@kit/shared.module';

import {SidebarModule, ThemeOptionsModule} from '@kit/components';
import { kitConfig } from './kit-config';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    KitModule.forRoot(kitConfig),
    SharedModule,
    SidebarModule,
    ThemeOptionsModule,
    LayoutModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }