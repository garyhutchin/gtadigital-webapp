import { CmsAppComponent } from './cms-app/cms-app.component'
import { AuthGuard } from './login/auth-guard.service'
import { LoginComponent } from './login/login.component'

export const cmsRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'content', canActivate: [AuthGuard], component: CmsAppComponent }
]