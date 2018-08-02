import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';

import { ConfigService } from '@kit/services/config.service';
import { NavigationService } from '@kit/components/navigation/navigation.service';
import { SidebarService } from '@kit/components/sidebar/sidebar.service';
import { KitPerfectScrollDirective} from '@kit/directives/kit-perfect-scroll/kit-perfect-scroll.directive';

@Component({
  selector: 'app-vstyle1',
  templateUrl: './vstyle1.component.html',
  styleUrls: ['./vstyle1.component.css']
})

export class Vstyle1Component implements OnInit, OnDestroy {
  kitConfig: any;
  kitPerfectScrollbarUpdateTimeout: any;
  navigation: any;

  // Private
  private _kitPerfectScrollbar: KitPerfectScrollDirective;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _configService: ConfigService,
    private _navigationService: NavigationService,
    private _sidebarService: SidebarService,
    private _router: Router
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  @ViewChild(KitPerfectScrollDirective)
  set directive(theDirective: KitPerfectScrollDirective) {
    if ( !theDirective ) {
      return;
    }

    this._kitPerfectScrollbar = theDirective;

    // Update the scrollbar on collapsable item toggle
    this._navigationService.onItemCollapseToggled
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.kitPerfectScrollbarUpdateTimeout = setTimeout(() => {
          this._kitPerfectScrollbar.update();
        }, 310);
      });

    // Scroll to the active item position
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
          setTimeout(() => {
            const activeNavItem: any = document.querySelector('navbar .nav-link.active');

            if ( activeNavItem ) {
              const activeItemOffsetTop       = activeNavItem.offsetTop,
                activeItemOffsetParentTop = activeNavItem.offsetParent.offsetTop,
                scrollDistance            = activeItemOffsetTop - activeItemOffsetParentTop - (48 * 3) - 168;

              this._kitPerfectScrollbar.scrollToTop(scrollDistance);
            }
          });
        }
      );
  }
  ngOnInit() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
          if ( this._sidebarService.getSidebar('navbar') ) {
            this._sidebarService.getSidebar('navbar').close();
          }
        }
      );

    // Subscribe to the config changes
    this._configService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.kitConfig = config;
      });

    // Get current navigation
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
    if ( this.kitPerfectScrollbarUpdateTimeout ) {
      clearTimeout(this.kitPerfectScrollbarUpdateTimeout);
    }

    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleSidebarOpened(): void {
    this._sidebarService.getSidebar('navbar').toggleOpen();
  }

  toggleSidebarFolded(): void {
    this._sidebarService.getSidebar('navbar').toggleFold();
  }

}
