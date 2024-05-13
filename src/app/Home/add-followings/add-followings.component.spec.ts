import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFollowingsComponent } from './add-followings.component';

describe('AddFollowingsComponent', () => {
  let component: AddFollowingsComponent;
  let fixture: ComponentFixture<AddFollowingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFollowingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFollowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
