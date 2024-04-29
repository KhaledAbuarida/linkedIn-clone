import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPageOptionsComponent } from './jobs-page-options.component';

describe('JobsPageOptionsComponent', () => {
  let component: JobsPageOptionsComponent;
  let fixture: ComponentFixture<JobsPageOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsPageOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsPageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
