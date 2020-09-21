import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MusicMainComponent } from './music/mainComponent/music-main.component';
import { ReleaseContainerComponent } from './music/releases/release-container.component';
import { PodcastsContainerComponent } from './music/podcasts/podcasts-container.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { ReleaseListResolver } from './music/releases/shared/release-list-resolver.service';
import { AboutComponent } from './about/about.component';
import { PodcastDetailsComponent } from './music/podcasts/podcast-details/podcast-details.component';
import { ReleaseDetailsComponent } from './music/releases/release-details/release-details.component';

const appRoutes:Routes = [
    { path: '', component: MainComponent },
    { path: 'home', component: MainComponent },
    { path: 'music', component: MusicMainComponent, resolve: {musicReleases:ReleaseListResolver} },
    { path: 'music/releases', component: ReleaseContainerComponent, resolve: {releases:ReleaseListResolver} },
    { path: 'music/podcasts', component:PodcastsContainerComponent },
    { path: 'about', component: AboutComponent },

    { path: 'music/releases/release/:id', component: ReleaseDetailsComponent, resolve: {releaseDetails:ReleaseListResolver} },

    { path: 'music/podcasts/podcast/:id', component: PodcastDetailsComponent },
    
    { path: '', redirectTo: '/home', pathMatch: 'full'},

    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}