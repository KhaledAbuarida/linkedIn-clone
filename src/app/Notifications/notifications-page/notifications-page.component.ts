import { Component } from '@angular/core';
import { AppHeaderComponent } from "../../app-header/app-header.component";
import { NotificationsHiringComponent } from "../notifications-hiring/notifications-hiring.component";
import { NotificationsBodyComponent } from "../notifications-body/notifications-body.component";
import { ManageNotificationsComponent } from "../notifications-manage/notifications-manage.component";
import { NotificationsTypeComponent } from "../notifications-type/notifications-type.component";

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.css',
  imports: [AppHeaderComponent, NotificationsHiringComponent, NotificationsBodyComponent, ManageNotificationsComponent, NotificationsTypeComponent]
})
export class NotificationsPageComponent {

}
