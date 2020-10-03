import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MusicMainComponent } from './music/mainComponent/music-main.component';
import { ReleaseContainerComponent } from './music/releases/release-container.component';
import { PodcastsContainerComponent } from './music/podcasts/podcasts-container.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { PodcastDetailsComponent } from './music/podcasts/podcast-details/podcast-details.component';
import { ReleaseDetailsComponent } from './music/releases/release-details/release-details.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';
import { ReleaseResolver } from './music/releases/release-details/release-resolver.service';
import { HomePageResolver } from './main/home-resolver.service';
import { StoreResolver } from './store/store-resolver.service';

const appRoutes:Routes = [
    { path: '', component: MainComponent, resolve: {home: HomePageResolver} },
    { path: 'home', component: MainComponent, resolve: {home: HomePageResolver} },
    { path: 'music', component: MusicMainComponent },
    { path: 'music/releases', component: ReleaseContainerComponent },
    { path: 'music/podcasts', component:PodcastsContainerComponent },
    { path: 'about', component: AboutComponent },
    { path: 'music/releases/release/:id', component: ReleaseDetailsComponent, resolve: {release: ReleaseResolver} },
    { path: 'music/podcasts/podcast/:id', component: PodcastDetailsComponent },
    { path: 'merch', component: StoreComponent, resolve: {merch: StoreResolver} },
    { path: 'contact', component: ContactComponent },
    
    { path: '', redirectTo: '/home', pathMatch: 'full'},

    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: 'cms', loadChildren: './cms/cms.module#CmsModule' },
    { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled', scrollPositionRestoration: 'enabled'
}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}