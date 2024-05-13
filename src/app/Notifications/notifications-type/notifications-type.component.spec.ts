import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsTypeComponent } from './notifications-type.component';

describe('NotificationsTypeComponent', () => {
  let component: NotificationsTypeComponent;
  let fixture: ComponentFixture<NotificationsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
