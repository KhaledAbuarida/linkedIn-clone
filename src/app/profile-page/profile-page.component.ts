import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { user } from '../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  user!: user;
  constructor(
    private userService: UserServiceService,
  ) { }

  async ngOnInit(): Promise<void> {
    const userId = localStorage.getItem('userId');
    const user = await this.userService.findUserById(userId!);
    this.user = user;
  }

}
