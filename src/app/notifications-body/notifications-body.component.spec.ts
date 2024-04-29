import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsBodyComponent } from './notifications-body.component';

describe('NotificationsBodyComponent', () => {
  let component: NotificationsBodyComponent;
  let fixture: ComponentFixture<NotificationsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
