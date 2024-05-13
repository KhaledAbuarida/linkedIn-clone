import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobHeaderComponent } from './post-job-header.component';

describe('PostJobHeaderComponent', () => {
  let component: PostJobHeaderComponent;
  let fixture: ComponentFixture<PostJobHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostJobHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostJobHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
