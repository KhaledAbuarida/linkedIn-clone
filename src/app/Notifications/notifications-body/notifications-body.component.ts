import { Component } from '@angular/core';
import { AppHeaderComponent } from "../../app-header/app-header.component";

@Component({
    selector: 'app-notifications-body',
    standalone: true,
    templateUrl: './notifications-body.component.html',
    styleUrl: './notifications-body.component.css',
    imports: [AppHeaderComponent]
})
export class NotificationsBodyComponent {

}
