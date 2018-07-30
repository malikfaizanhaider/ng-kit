import { Component, HostBinding, Input } from '@angular/core';
import { KitNavigationItem } from '@kit/types';

@Component({
  selector: 'app-vertical-group',
  templateUrl: './vertical-group.component.html',
  styleUrls: ['./vertical-group.component.scss']
})
export class VerticalGroupComponent {
  @HostBinding('class')
  classes = 'nav-group nav-item';

  @Input()
  item: KitNavigationItem;

  constructor() { }
}
