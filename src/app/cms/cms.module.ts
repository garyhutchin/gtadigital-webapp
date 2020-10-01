import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { cmsRoutes } from './cms.routes'
import { CmsAppComponent } from './cms-app/cms-app.component'
import { LoginComponent } from './login/login.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(cmsRoutes),
        FormsModule
    ],
    declarations: [
        CmsAppComponent,
        LoginComponent
    ],
    providers: [

    ]
})

export class CmsModule {}