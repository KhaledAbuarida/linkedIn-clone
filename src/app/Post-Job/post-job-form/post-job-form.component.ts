import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Job } from '../../model/Job';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../model/company';

@Component({
  selector: 'app-post-job-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-job-form.component.html',
  styleUrl: './post-job-form.component.css'
})
export class PostJobFormComponent {
  title: string = '';
  company: string = '';
  location: string = '';
  description: string = '';
  benefits: string = '';
  responsibilities: string = '';
  qualifications: string = '';

  constructor(private router: Router, public jobservice: JobService, public companyservice: CompanyService) { }

  async addJob() {
    const job = new Job();

    try {
      const Company = await this.companyservice.findCompanybyname(this.company);
      job.company = Company;
    } catch (error) {
      console.error("Error fetching company:", error);
    }

    job.title = this.title

    job.location = this.location
    job.description = this.description
    job.benefits = []
    job.responsibilities = []
    job.qualifications = []

    try {
      this.jobservice.addJob(job);
    } catch (error) {
      console.log(error)
    }

    this.router.navigate(['manage-jobs'])
  }


}
