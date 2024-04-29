import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPageGuidanceComponent } from './jobs-page-guidance.component';

describe('JobsPageGuidanceComponent', () => {
  let component: JobsPageGuidanceComponent;
  let fixture: ComponentFixture<JobsPageGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsPageGuidanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsPageGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
