import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  constructor() {}
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
  console.log(event);
  
    this.parallaxLayer.forEach(layer => {
      const speed:any = layer.nativeElement.getAttribute('data-speed');
      const x = (window.innerWidth - event.pageX*speed)/100  ;
      const y = (window.innerHeight - event.pageY*speed)/100;  
      layer.nativeElement.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }
  @ViewChildren('parallaxLayer')
  public parallaxLayer!: QueryList<ElementRef<HTMLLIElement>>;

  ngOnInit(): void {
  }
  ngAfterViewInit() {
  }
}
