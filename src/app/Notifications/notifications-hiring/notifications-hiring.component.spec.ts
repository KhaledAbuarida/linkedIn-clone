import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsHiringComponent } from './notifications-hiring.component';

describe('NotificationsHiringComponent', () => {
  let component: NotificationsHiringComponent;
  let fixture: ComponentFixture<NotificationsHiringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsHiringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationsHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
