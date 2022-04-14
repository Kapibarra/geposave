import { ViewportScroller } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  mobile = false;
  constructor(private viewportscroller: ViewportScroller) { }

  ngOnInit(): void {
    if (window.screen.width <= 968) {
      // 768px portrait
      this.mobile = true;
      console.log('mobile', this.mobile);
    }
  }

  ngDoCheck() {
    if (window.screen.width <= 968) {
//resizeable
      this.mobile = true;
      console.log('mobile', this.mobile);
    } else {
      this.mobile = false;
      console.log('false', this.mobile);
    }
  }
  onClickScroll(elementId: string):void {
    this.viewportscroller.scrollToAnchor(elementId);
     }
}
