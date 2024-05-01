import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { AppHeaderComponent } from './app-header/app-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HomePageComponent, AppHeaderComponent, CommonModule]
})
export class AppComponent {
  title = 'linkedIn-clone';
  constructor(private router: Router) { }

  isSignupPage(): boolean {
    return this.router.url === '/signup';
  }


}
