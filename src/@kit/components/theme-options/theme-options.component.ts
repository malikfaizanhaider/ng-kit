import { Component, HostBinding, Inject, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { kitAnimations } from '@kit/animations';
import { ConfigService } from '@kit/services/config.service';
import { NavigationService } from '@kit/components/navigation/navigation.service';
import { SidebarService } from '@kit/components/sidebar/sidebar.service';

@Component({
  selector: 'kit-theme-options',
  templateUrl: './theme-options.component.html',
  styleUrls: ['./theme-options.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations : kitAnimations
})
export class ThemeOptionsComponent implements OnInit, OnDestroy {

  kitConfig: any;
  form: FormGroup;

  @HostBinding('class.bar-closed')
  barClosed: boolean;

  // Private
  private _unsubscribeAll: Subject<any>;

/**
 * Constructor
 *
 * @param document
 * @param {FormBuilder} _formBuilder
 * @param {ConfigService} _ConfigService
 * @param {NavigationService} _NavigationService
 * @param {SidebarService} _SidebarService
 * @param {Renderer2} _renderer
 */
  constructor(
  @Inject(DOCUMENT) private document: any,
  private _formBuilder: FormBuilder,
  private _ConfigService: ConfigService,
  private _NavigationService: NavigationService,
  private _SidebarService: SidebarService,
  private _renderer: Renderer2
) {
  // Set the defaults
  this.barClosed = true;

  // Set the private defaults
  this._unsubscribeAll = new Subject();
}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */

  ngOnInit(): void {
    // Build the config form
    // noinspection TypeScriptValidateTypes
    this.form = this._formBuilder.group({
      colorTheme      : new FormControl(),
      customScrollbars: new FormControl(),
      layout          : this._formBuilder.group({
        style    : new FormControl(),
        width    : new FormControl(),
        navbar   : this._formBuilder.group({
          primaryBackground  : new FormControl(),
          secondaryBackground: new FormControl(),
          folded             : new FormControl(),
          hidden             : new FormControl(),
          position           : new FormControl(),
          variant            : new FormControl()
        }),
        toolbar  : this._formBuilder.group({
          background           : new FormControl(),
          customBackgroundColor: new FormControl(),
          hidden               : new FormControl(),
          position             : new FormControl()
        }),
        footer   : this._formBuilder.group({
          background           : new FormControl(),
          customBackgroundColor: new FormControl(),
          hidden               : new FormControl(),
          position             : new FormControl()
        }),
        sidepanel: this._formBuilder.group({
          hidden  : new FormControl(),
          position: new FormControl()
        })
      }),
    });


    // Subscribe to the config changes
    this._ConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        // Update the stored config
        this.kitConfig = config;

        // Set the config form values without emitting an event
        // so that we don't end up with an infinite loop
        this.form.setValue(config, {emitEvent: false});
      });

    // Subscribe to the specific form value changes (layout.style)
    this.form.get('layout.style').valueChanges
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {

        // Reset the form values based on the
        // selected layout style
        this._resetFormValues(value);

      });

    // Subscribe to the form value changes
    this.form.valueChanges
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        // Update the config
        this._ConfigService.config = config;
      });

    // Add customize nav item that opens the bar programmatically
    const customFunctionNavItem = {
      'id'      : 'custom-function',
      'title'   : 'Custom Function',
      'type'    : 'group',
      'icon'    : 'settings',
      'children': [
        {
          'id'      : 'customize',
          'title'   : 'Customize',
          'type'    : 'item',
          'icon'    : 'settings',
          'function': () => {
            this.toggleSidebarOpen('themeOptionsPanel');
          }
        }
      ]
    };

    this._NavigationService.addNavigationItem(customFunctionNavItem, 'end');
  }

  /**
   * On destroy
   */

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();

    // Remove the custom function menu
    this._NavigationService.removeNavigationItem('custom-function');
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Reset the form values based on the
   * selected layout style
   *
   * @param value
   * @private
   */
  private _resetFormValues(value): void {
    switch ( value ) {
      // Vertical Layout #1
      case 'app-vertical-layout1':
      {
        this.form.patchValue({
          layout: {
            width  : 'fullwidth',
            navbar : {
              primaryBackground  : 'fuse-navy-700',
              secondaryBackground: 'fuse-navy-900',
              folded    : false,
              hidden    : false,
              position  : 'left',
              variant   : 'vertical-style-1'
            },
            toolbar: {
              background           : 'fuse-white-500',
              customBackgroundColor: false,
              hidden               : false,
              position             : 'below-static'
            },
            footer : {
              background           : 'fuse-navy-900',
              customBackgroundColor: true,
              hidden               : false,
              position             : 'below-static'
            },
            sidepanel: {
              hidden  : false,
              position: 'right'
            }
          }
        });

        break;
      }

      // Vertical Layout #2
      case 'app-vertical-layout2': {
        this.form.patchValue({
          layout: {
            width  : 'fullwidth',
            navbar : {
              primaryBackground  : 'fuse-navy-700',
              secondaryBackground: 'fuse-navy-900',
              folded             : false,
              hidden             : false,
              position           : 'left',
              variant            : 'vertical-style-1'
            },
            toolbar: {
              background           : 'fuse-white-500',
              customBackgroundColor: false,
              hidden               : false,
              position             : 'below'
            },
            footer : {
              background           : 'fuse-navy-900',
              customBackgroundColor: true,
              hidden               : false,
              position             : 'below'
            },
            sidepanel: {
              hidden  : false,
              position: 'right'
            }
          }
        });

        break;
      }

      // Vertical Layout #3
      case 'app-vertical-layout3':
      {
        this.form.patchValue({
          layout: {
            width  : 'fullwidth',
            navbar : {
              primaryBackground  : 'fuse-navy-700',
              secondaryBackground: 'fuse-navy-900',
              folded             : false,
              hidden             : false,
              position           : 'left',
              layout             : 'vertical-style-1'
            },
            toolbar: {
              background           : 'fuse-white-500',
              customBackgroundColor: false,
              hidden               : false,
              position             : 'above-static'
            },
            footer : {
              background           : 'fuse-navy-900',
              customBackgroundColor: true,
              hidden               : false,
              position             : 'above-static'
            },
            sidepanel: {
              hidden  : false,
              position: 'right'
            }
          }
        });

        break;
      }

      // Horizontal Layout #1
      case 'app-horizontel-layout1':
      {
        this.form.patchValue({
          layout: {
            width  : 'fullwidth',
            navbar : {
              primaryBackground  : 'fuse-navy-700',
              secondaryBackground: 'fuse-navy-900',
              folded             : false,
              hidden             : false,
              position           : 'top',
              variant            : 'vertical-style-1'
            },
            toolbar: {
              background           : 'fuse-white-500',
              customBackgroundColor: false,
              hidden               : false,
              position             : 'above'
            },
            footer : {
              background           : 'fuse-navy-900',
              customBackgroundColor: true,
              hidden               : false,
              position             : 'above-fixed'
            },
            sidepanel: {
              hidden  : false,
              position: 'right'
            }
          }
        });

        break;
      }
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._SidebarService.getSidebar(key).toggleOpen();
  }
}
