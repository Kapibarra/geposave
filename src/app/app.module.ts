import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';
import { MainPageComponent } from './homepage/main-page/main-page.component';
import { HeaderComponent } from './homepage/shared/components/header/header.component';
import { HeroComponent } from './homepage/shared/components/hero/hero.component';
import { SymptomesComponent } from './homepage/shared/components/symptomes/symptomes.component';
import { IngridientsComponent } from './homepage/shared/components/ingridients/ingridients.component';
import { PrescriptionComponent } from './homepage/shared/components/prescription/prescription.component';
import { HowitworksComponent } from './homepage/shared/components/howitworks/howitworks.component';
import { LocationsComponent } from './homepage/shared/components/locations/locations.component';
import { BlogComponent } from './homepage/shared/components/blog/blog.component';
import { FooterComponent } from './homepage/shared/components/footer/footer.component';
import { AnimationData } from './homepage/shared/services/animationData.service';
import { BurgerComponent } from './homepage/shared/components/burger/burger.component';
import { AlertComponent } from './admin/shared/components/alert/alert.component';
import { News1Component } from './homepage/shared/news/news1/news1.component';
import { News2Component } from './homepage/shared/news/news2/news2.component';
import { News3Component } from './homepage/shared/news/news3/news3.component';
import { NewsFooterComponent } from './homepage/shared/news/news-footer/news-footer.component';
import { NewsHeaderComponent } from './homepage/shared/news/news-header/news-header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    MainPageComponent,
    HeaderComponent,
    HeroComponent,
    SymptomesComponent,
    IngridientsComponent,
    PrescriptionComponent,
    HowitworksComponent,
    LocationsComponent,
    BlogComponent,
    FooterComponent,
    BurgerComponent,
    AlertComponent,
    News1Component,
    News2Component,
    News3Component,
    NewsFooterComponent,
    NewsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [AnimationData],
  bootstrap: [AppComponent]
})
export class AppModule { }
