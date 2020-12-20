import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NewsComponent } from './components/news/news.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { VideosComponent } from './components/videos/videos.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    NewsComponent,
    WorldCupComponent,
    ResultatComponent,
    NextMatchComponent,
    VideosComponent,
    OurBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
