import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { UserServiceService } from '../../services/user-service.service';
import { Job } from '../../model/job';
import { Observable } from 'rxjs/internal/Observable';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../model/company';

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
    private userService: UserServiceService,
    private companyService: CompanyService
  ) {
    
  }
  async ngOnInit(): Promise<void> {
    const userI = localStorage.getItem('userId');
    const company:Company =await this.companyService.findCompanyById(userI!);
    console.log(company.company_name)
    console.log(this.jobService.getCompanyJobs(company.company_name!))
    this.jobs$ = this.jobService.getCompanyJobs(company.company_name!);
  }
  delete(job:Job){
    try{

      this.jobService.deleteJob(job.id!)
    }
    catch(err){
      console.log(err)
    }
  }
}
