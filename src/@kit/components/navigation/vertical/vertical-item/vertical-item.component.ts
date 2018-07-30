import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { KitNavigationItem } from '@kit/types';

@Component({
  selector: 'app-vertical-item',
  templateUrl: './vertical-item.component.html',
  styleUrls: ['./vertical-item.component.scss']
})
export class VerticalItemComponent implements OnInit {
  @HostBinding('class')
  classes = 'nav-item';

  @Input()
  item: KitNavigationItem;

  constructor() { }

  ngOnInit() {
  }

}
