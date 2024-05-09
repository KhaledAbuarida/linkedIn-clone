import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { NgModule } from '@angular/core';
import { MyNetworkPageComponent } from './my-network-page/my-network-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'notifications', component: NotificationsPageComponent },
    { path: 'network', component: MyNetworkPageComponent },
    { path: 'jobs', component: JobsPageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
