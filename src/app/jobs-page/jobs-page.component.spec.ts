import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPageComponent } from './jobs-page.component';

describe('JobsPageComponent', () => {
  let component: JobsPageComponent;
  let fixture: ComponentFixture<JobsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
