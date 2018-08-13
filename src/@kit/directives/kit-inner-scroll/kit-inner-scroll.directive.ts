import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MatchMediaService } from '@kit/services/match-media.service';

@Directive({
    selector: '[innerScroll]'
})
export class KitInnerScrollDirective implements OnInit, OnDestroy {
    // Private
    private _parent: any;
    private _grandParent: any;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {MatchMediaService} _kitMediaMatchService
     * @param {Renderer2} _renderer
     */
    constructor(
        private _elementRef: ElementRef,
        private _kitMediaMatchService: MatchMediaService,
        private _renderer: Renderer2
    ) {
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
        // Get the parent
        this._parent = this._renderer.parentNode(this._elementRef.nativeElement);

        // Return, if there is no parent
        if ( !this._parent ) {
            return;
        }

        // Get the grand parent
        this._grandParent = this._renderer.parentNode(this._parent);

        // Register to the media query changes
        this._kitMediaMatchService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((alias) => {

                if ( alias === 'xs' ) {
                    this._removeClass();
                } else {
                    this._addClass();
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Return, if there is no parent
        if ( !this._parent ) {
            return;
        }

        // Remove the class
        this._removeClass();

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Add the class name
     *
     * @private
     */
    private _addClass(): void {
        // Add the innerScroll class
        this._renderer.addClass(this._grandParent, 'innerScroll');
    }

    /**
     * Remove the class name
     * @private
     */
    private _removeClass(): void {

        // Remove the innerScroll class
        this._renderer.removeClass(this._grandParent, 'innerScroll');
    }
}
