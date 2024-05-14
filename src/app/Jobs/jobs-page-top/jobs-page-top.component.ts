import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../model/job';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-jobs-page-top',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './jobs-page-top.component.html',
  styleUrl: './jobs-page-top.component.css'
})
export class JobsPageTopComponent {
  jobs$!: Observable<Job[]>;
  constructor(private jobService: JobService,private userService :UserServiceService) {}

  async save(job: Job) {
    try {
      await this.userService.saveJob(job);
      alert('Job saved successfully!');
    } catch (error) {
      console.error('Error saving job:', error);
      alert('Failed to save job. Please try again.');
    }
  }

  ngOnInit(): void {
    this.jobs$ = this.jobService.getJobs();
  }
}
