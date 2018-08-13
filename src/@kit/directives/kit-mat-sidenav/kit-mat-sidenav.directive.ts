import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MatchMediaService } from '@kit/services/match-media.service';
import { KitMatSidenavHelperService } from '@kit/directives/kit-mat-sidenav/kit-mat-sidenav.service';

@Directive({
    selector: '[kitMatSidenavHelper]'
})
export class KitMatSidenavHelperDirective implements OnInit, OnDestroy
{
    @HostBinding('class.mat-is-locked-open')
    isLockedOpen: boolean;

    @Input('kitMatSidenavHelper')
    id: string;

    @Input('mat-is-locked-open')
    matIsLockedOpenBreakpoint: string;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {KitMatchMediaService} _kitMatchMediaService
     * @param {KitMatSidenavHelperService} _KitMatSidenavHelperService
     * @param {MatSidenav} _matSidenav
     * @param {ObservableMedia} _observableMedia
     */
    constructor(
        private _kitMatchMediaService: MatchMediaService,
        private _KitMatSidenavHelperService: KitMatSidenavHelperService,
        private _matSidenav: MatSidenav,
        private _observableMedia: ObservableMedia
    )
    {
        // Set the defaults
        this.isLockedOpen = true;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Register the sidenav to the service
        this._KitMatSidenavHelperService.setSidenav(this.id, this._matSidenav);

        if ( this._observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
        {
            this.isLockedOpen = true;
            this._matSidenav.mode = 'side';
            this._matSidenav.toggle(true);
        }
        else
        {
            this.isLockedOpen = false;
            this._matSidenav.mode = 'over';
            this._matSidenav.toggle(false);
        }

        this._kitMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if ( this._observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
                {
                    this.isLockedOpen = true;
                    this._matSidenav.mode = 'side';
                    this._matSidenav.toggle(true);
                }
                else
                {
                    this.isLockedOpen = false;
                    this._matSidenav.mode = 'over';
                    this._matSidenav.toggle(false);
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

@Directive({
    selector: '[kitMatSidenavToggler]'
})
export class KitMatSidenavTogglerDirective
{
    @Input('kitMatSidenavToggler')
    id;

    /**
     * Constructor
     *
     * @param {KitMatSidenavHelperService} _KitMatSidenavHelperService
     */
    constructor(
        private _KitMatSidenavHelperService: KitMatSidenavHelperService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On click
     */
    @HostListener('click')
    onClick()
    {
        this._KitMatSidenavHelperService.getSidenav(this.id).toggle();
    }
}
