import { Component } from '@angular/core';
import { PostJobInfoComponent } from "../post-job-info/post-job-info.component";
import { PostJobListComponent } from "../post-job-list/post-job-list.component";
import { PostJobActionComponent } from "../post-job-action/post-job-action.component";

@Component({
  selector: 'app-post-job-page',
  standalone: true,
  templateUrl: './manage-job-page.component.html',
  styleUrl: './manage-job-page.component.css',
  imports: [PostJobInfoComponent, PostJobListComponent, PostJobActionComponent]
})
export class ManageJobPageComponent {

}
