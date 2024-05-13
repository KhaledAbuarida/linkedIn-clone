import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { NotificationsPageComponent } from './Notifications/notifications-page/notifications-page.component';
import { NgModule } from '@angular/core';
import { MyNetworkPageComponent } from './Network/my-network-page/my-network-page.component';
import { JobsPageComponent } from './Jobs/jobs-page/jobs-page.component';
import { SignupComponent } from './logreg/signup/signup.component';
import { LoginComponent } from './logreg/login/login.component';
import { PostJobPageComponent } from './Post-Job/post-job-page/post-job-page.component';
import { ManageJobPageComponent } from './Manage-Jobs/manage-job-page/manage-job-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'notifications', component: NotificationsPageComponent },
    { path: 'network', component: MyNetworkPageComponent },
    { path: 'jobs', component: JobsPageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'manage-jobs', component: ManageJobPageComponent },
    { path: 'post-job', component: PostJobPageComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
