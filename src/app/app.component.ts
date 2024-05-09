import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { AppHeaderComponent } from './app-header/app-header.component';
import { CommonModule } from '@angular/common';
import { UserServiceService } from './services/user-service.service';
import { Observable } from 'rxjs';
import { user } from './model/user';
import { Email } from '@mui/icons-material';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HomePageComponent, AppHeaderComponent, CommonModule]
})
export class AppComponent {
  title = 'linkedIn-clone';
  
  userobserv :Observable<user[]>;
  
  constructor(private router: Router,userservice :UserServiceService) {
    this.userobserv =userservice.getUsers();
    let user1=new user();
    this.userobserv.subscribe(users => {
    });
    const hossam =userservice.finduser('khaled@khaled.com','123');
    
    console.log(hossam);
   }

  isSignupPage(): boolean {
    console.log(this.router.url);
    return (this.router.url == '/signup');
  }

  isLoginPage(): boolean {
    return (this.router.url === '/login');
  }
}

