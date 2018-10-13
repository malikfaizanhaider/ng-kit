import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ConfigService} from '@kit/services/config.service';
import { NavigationService} from '@kit/components/navigation/navigation.service';
import { SidebarService} from '@kit/components/sidebar/sidebar.service';

@Component({
  selector: 'app-hstyle1',
  templateUrl: './hstyle1.component.html',
  styleUrls: ['./hstyle1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Hstyle1Component implements OnInit, OnDestroy {
  kitConfig: any;
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
              private _configService: ConfigService,
              private _navigationService: NavigationService,
              private _sidebarService: SidebarService) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  //   //   // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */

  ngOnInit(): void {
    this._navigationService.onNavigationChanged
      .pipe(
        filter(value => value !== null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
      this.navigation = this._navigationService.getCurrentNavigation();
    });

    // Subscribe to the config changes
    this._configService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.kitConfig = config;
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}



