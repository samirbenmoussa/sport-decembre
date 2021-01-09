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
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContacttComponent } from './components/contactt/contactt.component';
import { MatcheComponent } from './components/matche/matche.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AllPlayerComponent } from './components/all-player/all-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlayersComponent } from './components/players/players.component';
import { DataService } from './service/data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

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
    OurBlogComponent,
    HomeComponent,
    
    ContacttComponent,
    
    MatcheComponent,
    
    AllMatchesComponent,
    
    AddMatchComponent,
    
    AddPlayerComponent,
    
    AllPlayerComponent,
    
    AdminComponent,
    
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
