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

export const appRoutes:Routes = [
    { path: '', component: MainComponent },
    { path: 'home', component: MainComponent },
    { path: 'music', component: MusicMainComponent},
    { path: 'releases', component: ReleaseContainerComponent},

    { path: 'releases/gta19', component: GTA19Component },
    { path: 'releases/gta18', component: GTA18Component },
    { path: 'releases/gta17', component: GTA17Component },
    { path: 'releases/gta16', component: GTA16Component },
    { path: 'releases/gta15', component: GTA15Component },
    { path: 'releases/gta14', component: GTA14Component },
    { path: 'releases/gta13', component: GTA13Component },
    { path: 'releases/gta12', component: GTA12Component },
    { path: 'releases/gta11', component: GTA11Component },
    { path: 'releases/gta10', component: GTA10Component },
    { path: 'releases/gta09', component: GTA9Component },
    { path: 'releases/gta08', component: GTA8Component },
    { path: 'releases/gta07', component: GTA7Component },
    { path: 'releases/gta06', component: GTA6Component },
    { path: 'releases/gta05', component: GTA5Component },
    { path: 'releases/gta04', component: GTA4Component },
    { path: 'releases/gta03', component: GTA3Component },
    { path: 'releases/gta02', component: GTA2Component },
    { path: 'releases/gta01', component: GTA1Component },
    
    { path: '', redirectTo: '/home', pathMatch: 'full'}
]