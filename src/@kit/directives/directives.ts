import { NgModule } from '@angular/core';
import { KitIfOnDomDirective } from '@kit/directives/kit-if-on-dom/kit-if-on-dom.directive';
import { KitInnerScrollDirective } from '@kit/directives/kit-inner-scroll/kit-inner-scroll.directive';
import { KitPerfectScrollDirective  } from '@kit/directives/kit-perfect-scroll/kit-perfect-scroll.directive';
import { KitMatSidenavHelperDirective , KitMatSidenavTogglerDirective} from './kit-mat-sidenav/kit-mat-sidenav.directive';

@NgModule({
  declarations: [
    KitPerfectScrollDirective,
    KitIfOnDomDirective,
    KitInnerScrollDirective,
    KitMatSidenavHelperDirective,
    KitMatSidenavTogglerDirective
  ],
  exports: [
    KitPerfectScrollDirective,
    KitIfOnDomDirective,
    KitInnerScrollDirective,
    KitMatSidenavHelperDirective,
    KitMatSidenavTogglerDirective
  ]
})

export class DirectivesModule {
}
