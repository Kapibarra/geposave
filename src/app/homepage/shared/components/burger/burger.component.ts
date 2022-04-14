import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {

  constructor(private viewportscroller: ViewportScroller) { }

  active = false;
  @Input() init!: boolean;
  @Output() opened = new EventEmitter<any>();
  ngOnInit() {
    this.active = this.init || false;
  }
  onBurgerClicked() {
    this.active = !this.active;
    this.opened.emit();
  }
  onClickScroll(elementId: string):void {
    this.viewportscroller.scrollToAnchor(elementId);
     }
}
