import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ConfigService } from '../../../../@kit/services/config.service';
import { navigation } from '../../../navigation/navigation';

@Component({
  selector: 'app-vertical-layout1',
  templateUrl: './vertical-layout1.component.html',
  styleUrls: ['./vertical-layout1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerticalLayout1Component  implements OnInit, OnDestroy {

  kitConfig: any;
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {ConfigService} _configService
   */
  constructor(
    private _configService: ConfigService
  ) {

    // Set the defaults
    this.navigation = navigation;

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
    this._configService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.kitConfig = config;
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
}
