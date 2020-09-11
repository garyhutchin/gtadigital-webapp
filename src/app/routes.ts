import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MusicMainComponent } from './music/mainComponent/music-main.component';
import { ReleaseContainerComponent } from './music/releases/release-container.component';
import { GTA19Component } from './music/releases/release-details/gta019/gta019.component';
import { GTA18Component } from './music/releases/release-details/gta018/gta018.component';
import { GTA17Component } from './music/releases/release-details/gta017/gta017.component';
import { GTA16Component } from './music/releases/release-details/gta016/gta016.component';
import { GTA15Component } from './music/releases/release-details/gta015/gta015.component';
import { GTA14Component } from './music/releases/release-details/gta014/gta014.component';
import { GTA13Component } from './music/releases/release-details/gta013/gta013.component';
import { GTA12Component } from './music/releases/release-details/gta012/gta012.component';
import { GTA11Component } from './music/releases/release-details/gta011/gta011.component';
import { GTA10Component } from './music/releases/release-details/gta010/gta010.component';
import { GTA9Component } from './music/releases/release-details/gta009/gta009.component';
import { GTA8Component } from './music/releases/release-details/gta008/gta008.component';
import { GTA7Component } from './music/releases/release-details/gta007/gta007.component';
import { GTA6Component } from './music/releases/release-details/gta006/gta006.component';
import { GTA5Component } from './music/releases/release-details/gta005/gta005.component';
import { GTA4Component } from './music/releases/release-details/gta004/gta004.component';
import { GTA2Component } from './music/releases/release-details/gta002/gta002.component';
import { GTA3Component } from './music/releases/release-details/gta003/gta003.component';
import { GTA1Component } from './music/releases/release-details/gta001/gta001.component';
import { PodcastsContainerComponent } from './music/podcasts/podcasts-container.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { ReleaseListResolver } from './music/releases/shared/release-list-resolver.service';
import { GTA20Component } from './music/releases/release-details/gta020/gta020.component';
import { AboutComponent } from './about/about.component';
import { PodcastDetailsComponent } from './music/podcasts/podcast-details/podcast-details.component';
import { ReleaseDetailsComponent } from './music/releases/release-details/release-details.component';

export const appRoutes:Routes = [
    { path: '', component: MainComponent },
    { path: 'home', component: MainComponent },
    { path: 'music', component: MusicMainComponent, resolve: {musicReleases:ReleaseListResolver} },
    { path: 'music/releases', component: ReleaseContainerComponent, resolve: {releases:ReleaseListResolver} },
    { path: 'music/podcasts', component:PodcastsContainerComponent },
    { path: 'about', component: AboutComponent },

    { path: 'music/releases/:id', component: ReleaseDetailsComponent, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta19', component: GTA19Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta18', component: GTA18Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta17', component: GTA17Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta16', component: GTA16Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta15', component: GTA15Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta14', component: GTA14Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta13', component: GTA13Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta12', component: GTA12Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta11', component: GTA11Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta10', component: GTA10Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta09', component: GTA9Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta08', component: GTA8Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta07', component: GTA7Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta06', component: GTA6Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta05', component: GTA5Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta04', component: GTA4Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta03', component: GTA3Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta02', component: GTA2Component, resolve: {releaseDetails:ReleaseListResolver} },
    { path: 'music/releases/gta01', component: GTA1Component, resolve: {releaseDetails:ReleaseListResolver} },

    { path: 'music/podcasts/podcast/:id', component: PodcastDetailsComponent },
    
    { path: '', redirectTo: '/home', pathMatch: 'full'},

    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/page-not-found' }
]