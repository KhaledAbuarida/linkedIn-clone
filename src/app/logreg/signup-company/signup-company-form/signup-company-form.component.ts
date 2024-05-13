import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { Company } from '../../../model/company';

@Component({
  selector: 'app-signup-company-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-company-form.component.html',
  styleUrl: './signup-company-form.component.css'
})
export class SignupCompanyFormComponent {

  email: string = ''
  name: string = ''
  number: string = ''
  location: string = ''
  password: string = ''
  description: string = ''
  image: any = ''

  constructor(private router: Router, public companyservice: CompanyService) { }

  addCompany() {
    const company = new Company();
    company.email = this.email
    company.company_name = this.name
    company.number = this.number
    company.location = this.location
    company.password = this.password
    company.description = this.description
    // company.logo = "this.image"

    try {
      this.companyservice.addCompany(company);
    } catch (error) {
      console.log(error)
    }

    this.router.navigate(['login'])

  }
}
