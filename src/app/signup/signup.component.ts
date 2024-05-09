import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { user } from '../model/user';
import { UserServiceService } from '../services/user-service.service';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  password: string = '';
  showPassword: boolean = false; // Initially set to true
  showText: string = 'Show'; // Initial text for the link
  inputEmail: string = '';
  inputPassword: string = '';

  constructor(private router: Router, public userservice: UserServiceService) {} // Inject Router

  signup(): void {
    const newUser = new user();
    newUser.email = this.inputEmail;
    newUser.password = this.inputPassword;

    
    if(newUser.email !== '' || newUser.password !== ''){
      console.log(newUser);
      this.userservice.addUser(newUser);
      this.router.navigate(['/']); // Replace '/home' with your actual home page route
    }


    // Navigate to home page after signup
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
