import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { MostPopularComponent } from './main/most-popular/most-popular.component';
import { MusicMainComponent } from './music/music-main.component';
import { ReleaseListSmallComponent } from './music/release-list-small.component';
import { ReleaseListComponent } from './music/releases/release-list.component';
import { AllReleasesComponent } from './music/all-releases.component';
import { LatestNewsComponent } from './main/latest-news/latest-news.component';
import { GTA19Component } from './music/releases/release-details/gta019/gta019.component';
import { GTA18Component } from './music/releases/release-details/gta018/gta018.component';
import { GTA17Component } from './music/releases/release-details/gta017/gta017.component';
import { YouMayLikeComponent } from './music/you-may-like/you-may-like.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    MostPopularComponent,
    MusicMainComponent,
    ReleaseListSmallComponent,
    ReleaseListComponent,
    AllReleasesComponent,
    LatestNewsComponent,
    GTA19Component,
    GTA18Component,
    GTA17Component,
    YouMayLikeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxAudioPlayerModule,
    BrowserAnimationsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
