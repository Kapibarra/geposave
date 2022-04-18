import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { News } from '../../classes/news';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  news!: News[]; // this is interface

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
  goToPostsPage1() {
    this.Router.navigate(['news']);
  }
}
