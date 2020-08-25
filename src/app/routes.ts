import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MusicMainComponent } from './music/music-main.component';
import { ReleaseContainerComponent } from './music/releases/release-container.component';
import { GTA19Component } from './music/releases/release-details/gta019/gta019.component';
import { GTA18Component } from './music/releases/release-details/gta018/gta018.component';
import { GTA17Component } from './music/releases/release-details/gta017/gta017.component';

export const appRoutes:Routes = [
    { path: '', component: MainComponent },
    { path: 'home', component: MainComponent },
    { path: 'music', component: MusicMainComponent},
    { path: 'releases', component: ReleaseContainerComponent},

    { path: 'releases/gta19', component: GTA19Component },
    { path: 'releases/gta18', component: GTA18Component },
    { path: 'releases/gta17', component: GTA17Component },
    
    { path: '', redirectTo: '/home', pathMatch: 'full'}
]