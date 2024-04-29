import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNotificationsComponent } from './manage-notifications.component';

describe('ManageNotificationsComponent', () => {
  let component: ManageNotificationsComponent;
  let fixture: ComponentFixture<ManageNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
