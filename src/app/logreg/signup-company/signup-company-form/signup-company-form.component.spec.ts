import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCompanyFormComponent } from './signup-company-form.component';

describe('SignupCompanyFormComponent', () => {
  let component: SignupCompanyFormComponent;
  let fixture: ComponentFixture<SignupCompanyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupCompanyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
