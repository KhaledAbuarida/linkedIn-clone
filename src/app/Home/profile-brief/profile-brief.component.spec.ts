import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBriefComponent } from './profile-brief.component';

describe('ProfileBriefComponent', () => {
  let component: ProfileBriefComponent;
  let fixture: ComponentFixture<ProfileBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBriefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
