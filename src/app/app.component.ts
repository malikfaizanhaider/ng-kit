import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ConfigService } from '@kit/services/config.service';
import { NavigationService } from '../@kit/components/navigation/navigation.service';
import { SidebarService } from '../@kit/components/sidebar/sidebar.service';
import { KitTranslationLoaderService } from '@kit/services/translation-loader.service';

import { locale as navigationEnglish } from 'app/navigation/i18n/en';
import { locale as navigationTurkish } from 'app/navigation/i18n/tr';

import { navigation } from './navigation/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
   * @param {KitTranslationLoaderService} _kitTranslationLoaderService
   * @param {Platform} _platform
   * @param {TranslateService} _translateService
   */
  constructor(
    @Inject(DOCUMENT) private document: any,
    private _configService: ConfigService,
    private _navigationService: NavigationService,
    private _sidebarService: SidebarService,
    private _kitTranslationLoaderService: KitTranslationLoaderService,
    private _translateService: TranslateService,
    private _platform: Platform
  ) {

    // Get default navigation
    this.navigation = navigation;

    // Register the navigation to the service
    this._navigationService.register('main', this.navigation);

    // Set the main navigation as our current navigation
    this._navigationService.setCurrentNavigation('main');

    // Add languages
    this._translateService.addLangs(['en', 'tr']);

    // Set the default language
    this._translateService.setDefaultLang('en');

    // Set the navigation translations
    this._kitTranslationLoaderService.loadTranslations(navigationEnglish, navigationTurkish);

    // Use a language
    this._translateService.use('en');

    // Add is-mobile class to the body if the platform is mobile
    if ( this._platform.ANDROID || this._platform.IOS )
    {
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

        if ( this.kitConfig.layout.width === 'boxed' )
        {
          this.document.body.classList.add('boxed');
        }
        else
        {
          this.document.body.classList.remove('boxed');
        }

        // Color theme - Use normal for loop for IE11 compatibility
        for ( let i = 0; i < this.document.body.classList.length; i++ )
        {
          const className = this.document.body.classList[i];

          if ( className.startsWith('theme-') )
          {
            this.document.body.classList.remove(className);
          }
        }

        this.document.body.classList.add(this.kitConfig.colorTheme);

      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
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
  toggleSidebarOpen(key): void
  {
    this._sidebarService.getSidebar(key).toggleOpen();
  }
}
