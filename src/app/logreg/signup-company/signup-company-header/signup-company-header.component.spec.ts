import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCompanyHeaderComponent } from './signup-company-header.component';

describe('SignupCompanyHeaderComponent', () => {
  let component: SignupCompanyHeaderComponent;
  let fixture: ComponentFixture<SignupCompanyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupCompanyHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupCompanyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
