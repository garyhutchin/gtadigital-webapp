import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { NoSanitizeHtmlPipe } from './shared/sanitize-html.pipe';
import { NoSanitizeUrlPipe } from './shared/sanitize-url.pipe';
import { ReversePipe } from './shared/reverse.pipe';

import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DesktopNavComponent } from './nav/desktop-nav/desktop-nav.component';
import { NavItems } from './nav/desktop-nav/nav-items/nav-items.component';
import { TabNavComponent } from './nav/tab-nav/tab-nav.component';
import { TabNavItems } from './nav/tab-nav/tab-nav-items/tab-nav-items.component';
import { BottomNavComponent } from './nav/bottom-mob-nav/bottom-mob-nav.component'
import { MostPopularComponent } from './main/most-popular/most-popular.component';
import { MostPopularReleaseThumbnail } from './main/most-popular/most-pop-release-thumbnail/most-pop-release-thumbnail.component';
import { MostPopularPodcastThumbnail } from './main/most-popular/most-pop-podcast-thumbnail/most-pop-podcast-thumbnail.component';
import { MostPopularService } from './main/shared/most-pop.service';
import { MusicMainComponent } from './music/mainComponent/music-main.component';
import { ReleaseListTileComponent } from './music/mainComponent/release-list-tile/release-list-tile.component';
import { ReleaseListComponent } from './music/releases/release-list/release-list.component';
import { ReleaseListThumbnail } from './music/mainComponent/release-list-tile/release-list-thumbnail/release-list-thumbnail.component';
import { ReleaseContainerComponent } from './music/releases/release-container.component';
import { LatestNewsComponent } from './main/latest-news/latest-news.component';
import { LatestNewsService } from './main/shared/latest-news.service';
import { LatestNewsThumbnail } from './main/latest-news/latest-news-thumbnail/latest-news-thumbnail.component';
import { YouMayLikeComponent } from './music/you-may-like/you-may-like.component';
import { LiveStreamComponent } from './main/live-stream/live-stream.component';
import { PodcastTileComponent } from './music/mainComponent/podcast-tile/podcast-tile.component';
import { PodcastTileThumbnail } from './music/mainComponent/podcast-tile/podcast-tile-thumbnail/podcast-tile-thumbnail.component'
import { LiveStreamArchiveComponent } from './music/mainComponent/live-stream-archive/live-stream-archive.component';
import { ReleaseService } from './music/releases/shared/releases.service';
import { ReleaseThumbnailComponent } from './music/releases/release-list/release-thumbnail/release-thumbnail.component';
import { PodcastsListComponent } from './music/podcasts/podcasts-list/podcasts-list.component';
import { PodcastDetailsComponent } from './music/podcasts/podcast-details/podcast-details.component'
import { PodcastsContainerComponent } from './music/podcasts/podcasts-container.component';
import { PodcastThumbnailComponent } from './music/podcasts/podcasts-list/podcast-thumbnail/podcast-thumbnail.component';
import { YouMayLikeThumbnailComponent } from './music/you-may-like/you-may-like-thumbnail/you-may-like-thumbnail.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContentService } from './shared/content.service';
import { PodcastService } from './music/podcasts/shared/podcast.service';

import { ReleaseDetailsComponent } from './music/releases/release-details/release-details.component';
import { YouMayLikePodcastComponent } from './music/podcasts/you-may-like-podcast/you-may-like-podcast.component';
import { YouMayLikePodcastThumbnailComponent } from './music/podcasts/you-may-like-podcast/you-may-like-podcast-thumbnail/you-may-like-podcast-thumbnail.component';
import { StoreComponent } from './store/store.component';
import { StoreThumbnailsComponent } from './store/store-thumbnails/store-thumbnails.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component'
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DesktopNavComponent,
    NavItems,
    TabNavComponent,
    TabNavItems,
    BottomNavComponent,
    MostPopularComponent,
    MostPopularReleaseThumbnail,
    MostPopularPodcastThumbnail,
    MusicMainComponent,
    ReleaseListTileComponent,
    ReleaseListThumbnail,
    ReleaseListComponent,
    ReleaseThumbnailComponent,
    ReleaseContainerComponent,
    LatestNewsComponent,
    LatestNewsThumbnail,
    YouMayLikeComponent,
    LiveStreamComponent,
    PodcastTileComponent,
    PodcastTileThumbnail,
    LiveStreamArchiveComponent,
    PodcastsListComponent,
    PodcastDetailsComponent,
    PodcastsContainerComponent,
    PodcastThumbnailComponent,
    YouMayLikeThumbnailComponent,
    PageNotFoundComponent,
    AboutComponent,
    NoSanitizeHtmlPipe,
    NoSanitizeUrlPipe,
    ReversePipe,
    ReleaseDetailsComponent,
    YouMayLikePodcastComponent,
    YouMayLikePodcastThumbnailComponent,
    StoreComponent,
    StoreThumbnailsComponent,
    StoreListComponent,
    ContactComponent,
    ContactFormComponent
  ],

  providers: [
    ReleaseService,
    PodcastService,
    MostPopularService,
    LatestNewsService,
    ContentService
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
