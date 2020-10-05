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
import { ReleaseResolver } from './resolvers/release-details-resolver.service';
import { HomePageResolver } from './resolvers/home-page-resolver.service';
import { StoreResolver } from './resolvers/store-page-resolver.service';
import { StoreItemOneResolver } from './resolvers/store-items/store-item-1-resolver.service';
import { StoreItemTwoResolver } from './resolvers/store-items/store-item-2-resolver.service';
import { StoreItemThreeResolver } from './resolvers/store-items/store-item-3-resolver.service';
import { StoreItemFourResolver } from './resolvers/store-items/store-item-4-resolver.service';
import { StoreItemFiveResolver } from './resolvers/store-items/store-item-5-resolver.service';
import { StoreItemSixResolver } from './resolvers/store-items/store-item-6-resolver.service';
import { StoreItemSevenResolver } from './resolvers/store-items/store-item-7-resolver.service';
import { StoreItemEightResolver } from './resolvers/store-items/store-item-8-resolver.service';
import { LatestNewsResolver } from './resolvers/latest-news-resolver.service';
import { ReleasePageResolver } from './resolvers/release-page-resolver.service';
import { ReleaseListResolver } from './resolvers/release-list-resolver.service';
import { PodcastPageResolver } from './resolvers/podcast-page-resolver.service';
import { AboutPageResolver } from './resolvers/about-page-resolver.service';
import { MostPopularPodcastResolver } from './resolvers/most-popular/most-pop-podcast-resolver.service';
import { MostPopularReleaseResolver } from './resolvers/most-popular/most-pop-releases-resolver.service';
import { ContactPageResolver } from './resolvers/contact-page-resolver.service';
import { MusicPageResolver } from './resolvers/music-page-resolver.service';
import { PodcastResolver } from './resolvers/podcast-details-resolver.service';
import { PodcastListResolver } from './resolvers/podcast-list-resolver';
import { LiveStreamItemsResolver } from './resolvers/live-stream-items-resolver.service';

const appRoutes:Routes = [
    { path: '', component: MainComponent, resolve: {homePage: HomePageResolver, latestNews: LatestNewsResolver} },
    { path: 'home', component: MainComponent, resolve: {homePage: HomePageResolver, latestNews: LatestNewsResolver} },
    { path: 'music', component: MusicMainComponent, resolve: {musicPage: MusicPageResolver, releaseList: ReleaseListResolver, homePage: HomePageResolver, podcastList: PodcastListResolver, liveStream: LiveStreamItemsResolver} },
    { path: 'music/releases', component: ReleaseContainerComponent, resolve: {releasePage: ReleasePageResolver, releaseList: ReleaseListResolver, homePage: HomePageResolver} },
    { path: 'music/podcasts', component:PodcastsContainerComponent, resolve: {podcastPage: PodcastPageResolver, podcastList: PodcastListResolver, homePage: HomePageResolver} },
    { path: 'about', component: AboutComponent, resolve: {aboutPage: AboutPageResolver, mostPopPodcast: MostPopularPodcastResolver, mostPopRelease: MostPopularReleaseResolver} },
    { path: 'music/releases/release/:id', component: ReleaseDetailsComponent, resolve: {release: ReleaseResolver, releaseList: ReleaseListResolver} },
    { path: 'music/podcasts/podcast/:id', component: PodcastDetailsComponent, resolve: {podcast: PodcastResolver, podcastList: PodcastListResolver} },
    { path: 'merch', component: StoreComponent, resolve:   {merch: StoreResolver, 
                                                            merchItem1: StoreItemOneResolver,
                                                            merchItem2: StoreItemTwoResolver,
                                                            merchItem3: StoreItemThreeResolver, 
                                                            merchItem4: StoreItemFourResolver, 
                                                            merchItem5: StoreItemFiveResolver, 
                                                            merchItem6: StoreItemSixResolver, 
                                                            merchItem7: StoreItemSevenResolver, 
                                                            merchItem8: StoreItemEightResolver,} },
    { path: 'contact', component: ContactComponent, resolve: {contactPage: ContactPageResolver} },
    
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