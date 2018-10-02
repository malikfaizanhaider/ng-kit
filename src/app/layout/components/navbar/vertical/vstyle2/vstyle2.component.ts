import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';

import { NavigationService } from '@kit/components/navigation/navigation.service';
import { KitPerfectScrollDirective } from '@kit/directives/kit-perfect-scroll/kit-perfect-scroll.directive';
import { SidebarService } from '@kit/components/sidebar/sidebar.service';

@Component({
  selector: 'app-vstyle2',
  templateUrl: './vstyle2.component.html',
  styleUrls: ['./vstyle2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Vstyle2Component implements OnInit, OnDestroy {

  kitPerfectScrollbarUpdateTimeout: any;
  navigation: any;

  // Private
  private _kitPerfectScrollbar: KitPerfectScrollDirective;
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {NavigationService} _navigationService
   * @param {SidebarService} _sidebarService
   * @param {Router} _router
   */
  constructor(
    private _navigationService: NavigationService,
    private _sidebarService: SidebarService,
    private _router: Router
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  // Directive
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
                scrollDistance            = activeItemOffsetTop - activeItemOffsetParentTop - (48 * 3);

              this._kitPerfectScrollbar.scrollToTop(scrollDistance);
            }
          });
        }
      );
  }
  ngOnInit(): void {
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

  /**
   * On destroy
   */
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
