import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { News } from '../../classes/news';
import SwiperCore, { Navigation, SwiperOptions, Pagination } from 'swiper';

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  news!: News[]; // this is interface
  config: SwiperOptions = {
    navigation: true,
    pagination: true,
    scrollbar: { draggable: true },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      968: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  };


  constructor(private Router: Router, private http: HttpClient) {}

  ngOnInit(): void {

    
    this.http
      .get(
        'https://geposave-default-rtdb.europe-west1.firebasedatabase.app/news.json'
      )
      .subscribe((response: any) => {
        this.news = response;
      });
  }
}
