import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
export const routes: Routes = [
    { path: '', component: NotificationsPageComponent },
];

