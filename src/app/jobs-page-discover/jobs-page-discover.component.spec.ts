import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPageDiscoverComponent } from './jobs-page-discover.component';

describe('JobsPageDiscoverComponent', () => {
  let component: JobsPageDiscoverComponent;
  let fixture: ComponentFixture<JobsPageDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsPageDiscoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsPageDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
