import { Component, OnInit, HostListener, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-ingridients',
  templateUrl: './ingridients.component.html',
  styleUrls: ['./ingridients.component.scss']
})
export class IngridientsComponent implements OnInit {
mobile = false;
  constructor() { }
  @ViewChildren('parallaxIngridients')
  public parallaxIngridients!: QueryList<ElementRef<HTMLLIElement>>;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.parallaxIngridients.forEach(layer => {
      const speed:any = layer.nativeElement.getAttribute('data-speed');
      const x = (window.innerWidth - event.pageX*speed)/100  ;
      const y = (window.innerHeight - event.pageY*speed)/100;  
      layer.nativeElement.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }

  ngOnInit(): void {
    if (window.screen.width <= 968) {
      // 768px portrait
      this.mobile = true;
    }
  }
  ngAfterViewInit() {
  }
}
