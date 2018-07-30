import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-horizontal-item',
  templateUrl: './horizontal-item.component.html',
  styleUrls: ['./horizontal-item.component.css']
})
export class HorizontalItemComponent implements OnInit {
  @HostBinding('class')
  classes = 'nav-item';

  @Input()
  item: any;

  constructor() { }

  ngOnInit() {
  }

}
