import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCompanyPageComponent } from './signup-company-page.component';

describe('SignupCompanyPageComponent', () => {
  let component: SignupCompanyPageComponent;
  let fixture: ComponentFixture<SignupCompanyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupCompanyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupCompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
