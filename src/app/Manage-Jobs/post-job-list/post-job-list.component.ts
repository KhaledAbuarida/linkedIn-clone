import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { UserServiceService } from '../../services/user-service.service';
import { Job } from '../../model/job';

@Component({
  selector: 'app-post-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-job-list.component.html',
  styleUrl: './post-job-list.component.css',
})
export class PostJobListComponent {
  jobs$!: Observable<Job[]>;
  constructor(
    private router: Router,
    private jobService: JobService,
    private userService: UserServiceService
  ) {}
  ngOnInit(): void {
    this.jobs$ = this.jobService.getCompanyJobs();
  }
}
