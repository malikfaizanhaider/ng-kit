import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ConfigService } from '@kit/services/config.service';
import { NavigationService } from '../@kit/components/navigation/navigation.service';
import { SidebarService } from '../@kit/components/sidebar/sidebar.service';

import { navigation } from './navigation/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  kitConfig: any;
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {ConfigService} _configService
   * @param {NavigationService} _navigationService
   * @param {SidebarService} _sidebarService
   * @param {Platform} _platform
   */
  constructor(
    @Inject(DOCUMENT) private document: any,
    private _configService: ConfigService,
    private _navigationService: NavigationService,
    private _sidebarService: SidebarService,
    private _platform: Platform
  ) {

    // Get default navigation
    this.navigation = navigation;

    // Register the navigation to the service
    this._navigationService.register('main', this.navigation);

    // Set the main navigation as our current navigation
    this._navigationService.setCurrentNavigation('main');

    // Add is-mobile class to the body if the platform is mobile
    if ( this._platform.ANDROID || this._platform.IOS ) {
      this.document.body.classList.add('is-mobile');
    }

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */

  ngOnInit() {
    // Subscribe to config changes
    this._configService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.kitConfig = config;

        if ( this.kitConfig.layout.width === 'boxed') {
          this.document.body.classList.add('boxed');
        } else {
          this.document.body.classList.remove('boxed');
        }
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggelSidebarOpen(key): void {
    this._sidebarService.getSidebar(key).toggleOpen();
  }

}
