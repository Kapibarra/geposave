
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './homepage/main-page/main-page.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { News1Component } from './homepage/shared/news/news1/news1.component';
import { News2Component } from './homepage/shared/news/news2/news2.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'news/1', component: News1Component },
  { path: 'news/2', component: News2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
