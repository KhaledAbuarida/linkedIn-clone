import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { NgModule } from '@angular/core';
import { MyNetworkPageComponent } from './my-network-page/my-network-page.component';
export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'notifications', component: NotificationsPageComponent },
    { path: 'network', component: MyNetworkPageComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
