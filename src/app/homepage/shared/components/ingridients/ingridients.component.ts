import { Component, OnInit, HostListener, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-ingridients',
  templateUrl: './ingridients.component.html',
  styleUrls: ['./ingridients.component.scss']
})
export class IngridientsComponent implements OnInit {

  constructor() { }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.parallaxIngridients.forEach(layer => {
      const speed:any = layer.nativeElement.getAttribute('data-speed');
      const x = (window.innerWidth - event.pageX*speed)/100  ;
      const y = (window.innerHeight - event.pageY*speed)/100;  
      layer.nativeElement.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }
  @ViewChildren('parallaxIngridients')
  public parallaxIngridients!: QueryList<ElementRef<HTMLLIElement>>;

  ngOnInit(): void {
  }
  ngAfterViewInit() {
  }
}
