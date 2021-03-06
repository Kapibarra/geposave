import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

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
import { HttpClientModule } from '@angular/common/http';
import { SharedPipesModule } from './pipes/pipes.module';
import { PostComponent } from './homepage/shared/news/post/post.component';
import { NewsTemplateComponent } from './homepage/shared/news/news-template/news-template.component';

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
    PostComponent,
    NewsTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SwiperModule, 
    SharedPipesModule   
  ],
  providers: [AnimationData],
  bootstrap: [AppComponent]
})
export class AppModule { }
