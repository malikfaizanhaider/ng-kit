import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { KitModule } from '../@kit/kit.module';
import { SharedModule } from '../@kit/shared.module';
import {SidebarModule, ThemeOptionsModule} from '@kit/components';
import { kitConfig } from './kit-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from './app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from './layout/layout.module';

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
    TranslateModule.forRoot(),
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay             : 0,
      passThruUnknownUrl: true
    }),
    // Material moment date module
    MatMomentDateModule,
    MatButtonModule,
    MatIconModule,
    KitModule.forRoot(kitConfig),
    SharedModule,
    SidebarModule,
    ThemeOptionsModule,
    LayoutModule,
    AppStoreModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
