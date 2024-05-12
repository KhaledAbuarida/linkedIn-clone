import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPageTopComponent } from './jobs-page-top.component';

describe('JobsPageTopComponent', () => {
  let component: JobsPageTopComponent;
  let fixture: ComponentFixture<JobsPageTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsPageTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsPageTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
