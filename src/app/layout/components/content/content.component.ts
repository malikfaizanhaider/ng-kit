import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
