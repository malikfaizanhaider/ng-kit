import { Component, HostBinding, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
 * @param {FormBuilder} _formBuilder
 * @param {ConfigService} _ConfigService
 * @param {NavigationService} _NavigationService
 * @param {SidebarService} _SidebarService
 * @param {Renderer2} _renderer
 */
  constructor(
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
      layout          : this._formBuilder.group({
        style    : new FormControl(),
        width    : new FormControl(),
        navbar   : this._formBuilder.group({
          background: new FormControl(),
          folded    : new FormControl(),
          hidden    : new FormControl(),
          position  : new FormControl(),
          variant   : new FormControl()
        }),
        toolbar  : this._formBuilder.group({
          background: new FormControl(),
          hidden    : new FormControl(),
          position  : new FormControl()
        }),
        footer   : this._formBuilder.group({
          background: new FormControl(),
          hidden    : new FormControl(),
          position  : new FormControl()
        }),
        sidepanel: this._formBuilder.group({
          hidden: new FormControl(),
          position  : new FormControl()
        })
      }),
      customScrollbars: new FormControl()
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
              background: 'mat-fuse-dark-700-bg',
              folded    : false,
              hidden    : false,
              position  : 'left',
              variant   : 'vertical-style-1'
            },
            toolbar: {
              background: 'mat-white-500-bg',
              hidden    : false,
              position  : 'below-static'
            },
            footer : {
              background: 'mat-fuse-dark-900-bg',
              hidden    : false,
              position  : 'below-static'
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
              background: 'mat-fuse-dark-700-bg',
              folded    : false,
              hidden    : false,
              position  : 'left',
              variant   : 'vertical-style-1'
            },
            toolbar: {
              background: 'mat-white-500-bg',
              hidden    : false,
              position  : 'below'
            },
            footer : {
              background: 'mat-fuse-dark-900-bg',
              hidden    : false,
              position  : 'below'
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
              background: 'mat-fuse-dark-700-bg',
              folded    : false,
              hidden    : false,
              position  : 'left',
              layout    : 'vertical-style-1'
            },
            toolbar: {
              background: 'mat-white-500-bg',
              hidden    : false,
              position  : 'above-static'
            },
            footer : {
              background: 'mat-fuse-dark-900-bg',
              hidden    : false,
              position  : 'above-static'
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
              background: 'mat-fuse-dark-700-bg',
              folded    : false,
              hidden    : false,
              position  : 'top',
              variant   : 'vertical-style-1'
            },
            toolbar: {
              background: 'mat-white-500-bg',
              hidden    : false,
              position  : 'above'
            },
            footer : {
              background: 'mat-fuse-dark-900-bg',
              hidden    : false,
              position  : 'above-fixed'
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
