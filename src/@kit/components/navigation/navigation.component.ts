import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationService} from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  @Input()
  layout = 'vertical';

  @Input()
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _navigationService: NavigationService) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.navigation = this.navigation || this._navigationService.getCurrentNavigation();
    this._navigationService.onNavigationChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.navigation = this._navigationService.getCurrentNavigation();
      });
  }
}
