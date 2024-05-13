import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent implements OnInit {
  hideHeader: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.hideHeader = false;

      const firstChild = this.route.snapshot.firstChild;
      if (firstChild && firstChild.routeConfig) {
        const path = firstChild.routeConfig.path;
        this.hideHeader = (path === 'login' || path === 'signup' || path === 'post-job' || path === 'company-signup');
      }
    });
  }


}
