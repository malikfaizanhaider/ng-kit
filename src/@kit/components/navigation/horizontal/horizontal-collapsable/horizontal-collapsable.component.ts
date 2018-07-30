import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {ConfigService} from '@kit/services/config.service';

@Component({
  selector: 'app-horizontal-collapsable',
  templateUrl: './horizontal-collapsable.component.html',
  styleUrls: ['./horizontal-collapsable.component.css']
})
export class HorizontalCollapsableComponent implements OnInit, OnDestroy {
  kitConfig: any;
  isOpen = false;

  @HostBinding('class')
  classes = 'nav-collapsable nav-item';

  @Input()
  item: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _configService: ConfigService) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._configService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (config) => {
          this.kitConfig = config;
        }
      );
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  @HostListener('mouseenter')
  open(): void {
    this.isOpen = true;
  }

  @HostListener('mouseleave')
  close(): void {
    this.isOpen = false;
  }
}
