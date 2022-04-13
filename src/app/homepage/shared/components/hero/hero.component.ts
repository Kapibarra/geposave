import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AnimationData } from '../../services/animationData.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  animateText!: string;
  constructor(private animationService: AnimationData) {}

  @ViewChildren('parallaxHero')
  public parallaxHero!: QueryList<ElementRef<HTMLLIElement>>;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.parallaxHero.forEach((layer) => {
      const speed: any = layer.nativeElement.getAttribute('data-speed');
      const x = (window.innerWidth - event.pageX * speed) / 100;
      const y = (window.innerHeight - event.pageY * speed) / 100;
      layer.nativeElement.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  ngOnInit(): void {
    const animateJSON = JSON.stringify(this.animationService);
    localStorage.setItem('testJSON', animateJSON)
    let text = localStorage.getItem('testJSON');
    let animateObj = JSON.parse(text!);  
    this.animateText = animateObj.animationData.toString();
    console.log(this.animateText);
    
  }
  ngAfterViewInit() {
  }
}
