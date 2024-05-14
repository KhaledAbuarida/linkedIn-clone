import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../model/job';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent {
  jobId: string = '';
  jobTitle: string = '';
  jobLocation: string = '';
  jobResponsibilities: string = '';
  jobDescription: string = '';
  CompanyName: string = '';
  jobBenefits: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.jobId = params['id'];
      this.jobTitle = params['title'];
      this.jobLocation = params['location'];
      this.jobResponsibilities = params['responsibilities'];
      this.jobDescription = params['description'];
      this.CompanyName = params['company'];
      this.jobBenefits = params['benefits'];
    });
  }
}
