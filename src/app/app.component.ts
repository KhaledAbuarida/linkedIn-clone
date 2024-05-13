import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HomePageComponent } from "./Home/home-page/home-page.component";
import { AppHeaderComponent } from './app-header/app-header.component';
import { CommonModule } from '@angular/common';
import { UserServiceService } from './services/user-service.service';
import { Observable } from 'rxjs';
import { user } from './model/user';
import { Email } from '@mui/icons-material';
import { Job } from './model/job';
import { JobService } from './services/job.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HomePageComponent, AppHeaderComponent, CommonModule]
})
export class AppComponent {
  title = 'linkedIn-clone';

  userobserv: Observable<Job[]>;

  constructor(private router: Router, jobService: JobService) {


    this.userobserv = jobService.getJobs();
    this.userobserv.subscribe(jobs => {
      console.log(jobs);
    });


  }

  isSignupPage(): boolean {
    console.log(this.router.url);
    return (this.router.url == '/signup');
  }

  isLoginPage(): boolean {
    return (this.router.url === '/login');
  }
}

