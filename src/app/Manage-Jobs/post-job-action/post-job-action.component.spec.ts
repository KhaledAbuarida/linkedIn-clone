import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobActionComponent } from './post-job-action.component';

describe('PostJobActionComponent', () => {
  let component: PostJobActionComponent;
  let fixture: ComponentFixture<PostJobActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostJobActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostJobActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
