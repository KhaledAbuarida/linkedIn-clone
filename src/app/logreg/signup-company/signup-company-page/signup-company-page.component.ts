import { Component } from '@angular/core';
import { SignupCompanyHeaderComponent } from "../signup-company-header/signup-company-header.component";
import { SignupCompanyFormComponent } from "../signup-company-form/signup-company-form.component";

@Component({
  selector: 'app-signup-company-page',
  standalone: true,
  templateUrl: './signup-company-page.component.html',
  styleUrl: './signup-company-page.component.css',
  imports: [SignupCompanyHeaderComponent, SignupCompanyFormComponent]
})
export class SignupCompanyPageComponent {

}
