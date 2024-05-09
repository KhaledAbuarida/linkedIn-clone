import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string = '';
  showPassword: boolean = false; // Initially set to true
  showText: string = 'Show'; // Initial text for the link

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.showPassword == true) {
      this.showText = 'Hide'
    } else {
      this.showText = 'Show'
    }
  }
}
