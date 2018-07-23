import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {ConfigService} from '@kit/services/config.service';
import { navigation } from 'app/navigation/navigation';
@Component({
  selector: 'app-horizontel-layout1',
  templateUrl: './horizontel-layout1.component.html',
  styleUrls: ['./horizontel-layout1.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HorizontelLayout1Component implements OnInit, OnDestroy {
  kitConfig: any;
  navigation: any;
  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _kitConfigService: ConfigService) {
    // Set the defaults
    this.navigation = navigation;

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._kitConfigService.config
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
