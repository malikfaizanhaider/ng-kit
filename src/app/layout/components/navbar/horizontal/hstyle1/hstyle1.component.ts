import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NavigationService} from '@kit/components/navigation/navigation.service';
import { SidebarService} from '@kit/components/sidebar/sidebar.service';

@Component({
  selector: 'app-hstyle1',
  templateUrl: './hstyle1.component.html',
  styleUrls: ['./hstyle1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Hstyle1Component implements OnInit, OnDestroy {
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _navigationService: NavigationService,
              private _sidebarService: SidebarService) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._navigationService.onNavigationChanged
      .pipe(
        filter(value => value !== null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
      this.navigation = this._navigationService.getCurrentNavigation();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
