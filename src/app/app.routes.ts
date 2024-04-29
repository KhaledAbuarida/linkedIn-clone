import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { NgModule } from '@angular/core';
import { MyNetworkPageComponent } from './my-network-page/my-network-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'notifications', component: NotificationsPageComponent },
    { path: 'network', component: MyNetworkPageComponent },
    { path: 'jobs', component: JobsPageComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
