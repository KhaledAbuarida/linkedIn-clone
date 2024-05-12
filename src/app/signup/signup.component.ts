import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { user } from '../model/user';
import { UserServiceService } from '../services/user-service.service';
import { Firestore } from '@angular/fire/firestore';
import { CompanyService } from '../services/company.service';
import { Company } from '../model/company';
import { AppHeaderComponent } from "../app-header/app-header.component";

@Component({
    selector: 'app-signup',
    standalone: true,
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
    imports: [FormsModule, AppHeaderComponent]
})
export class SignupComponent {
  password: string = '';
  showPassword: boolean = false; // Initially set to true
  showText: string = 'Show'; // Initial text for the link
  inputEmail: string = '';
  inputPassword: string = '';
  inputCompany:boolean =false;

  constructor(private router: Router, public userservice: UserServiceService,public companyservice:CompanyService) {} // Inject Router

  signup(): void {
    if(this.inputCompany){
      const company =new Company();
      company.email = this.inputEmail;
      company.password = this.inputPassword;
      this.companyservice.addCompany(company);
      this.router.navigate(['/']);
    }
    else{
      const newUser = new user();
    newUser.email = this.inputEmail;
    newUser.password = this.inputPassword;

    
    if(newUser.email !== '' || newUser.password !== ''){
      console.log(newUser);
      this.userservice.addUser(newUser);
      this.router.navigate(['/']); // Replace '/home' with your actual home page route
    }
    }
    
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.showPassword == true) {
      this.showText = 'Hide';
    } else {
      this.showText = 'Show';
    }
  }
}
