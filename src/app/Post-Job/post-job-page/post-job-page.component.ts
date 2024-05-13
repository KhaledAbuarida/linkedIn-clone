import { Component } from '@angular/core';
import { PostJobHeaderComponent } from "../post-job-header/post-job-header.component";
import { PostJobFormComponent } from "../post-job-form/post-job-form.component";

@Component({
  selector: 'app-post-job-page',
  standalone: true,
  templateUrl: './post-job-page.component.html',
  styleUrl: './post-job-page.component.css',
  imports: [PostJobHeaderComponent, PostJobFormComponent]
})
export class PostJobPageComponent {

}
