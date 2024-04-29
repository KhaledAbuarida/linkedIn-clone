import { Component } from '@angular/core';
import { MyNetworkInvitationsComponent } from "../my-network-invitations/my-network-invitations.component";
import { MyNetworkBodyComponent } from "../my-network-body/my-network-body.component";
import { MyNetworkManageComponent } from "../my-network-manage/my-network-manage.component";

@Component({
  selector: 'app-my-network-page',
  standalone: true,
  templateUrl: './my-network-page.component.html',
  styleUrl: './my-network-page.component.css',
  imports: [MyNetworkInvitationsComponent, MyNetworkBodyComponent, MyNetworkManageComponent]
})
export class MyNetworkPageComponent {

}
