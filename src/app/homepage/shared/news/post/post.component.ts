import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { News } from '../../classes/news';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy,AfterContentInit {
  post!: News; // this is interface
  isLoading:boolean = true;
  private routeSub? : Subscription | null;
  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.routeSub = this.router.params.subscribe(params => {
      const id = params['id']
    this.http.get(  `https://geposave-default-rtdb.europe-west1.firebasedatabase.app/news/${id}.json`).subscribe((response: any) => {
      this.post = response;
    });
    })
  }
  ngAfterContentInit() {
    this.isLoading = false
  }
  ngOnDestroy() {
    if (this.routeSub) this.routeSub.unsubscribe();
  }
}
