import { Component } from '@angular/core';
import { JobsPageOptionsComponent } from "../jobs-page-options/jobs-page-options.component";
import { JobsPageTopComponent } from "../jobs-page-top/jobs-page-top.component";
import { JobsPageDiscoverComponent } from "../jobs-page-discover/jobs-page-discover.component";
import { JobsPageGuidanceComponent } from "../jobs-page-guidance/jobs-page-guidance.component";

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.css',
  imports: [JobsPageOptionsComponent, JobsPageTopComponent, JobsPageDiscoverComponent, JobsPageGuidanceComponent]
})
export class JobsPageComponent {

}
