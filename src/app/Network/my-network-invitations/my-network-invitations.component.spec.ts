import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNetworkInvitationsComponent } from './my-network-invitations.component';

describe('MyNetworkInvitationsComponent', () => {
  let component: MyNetworkInvitationsComponent;
  let fixture: ComponentFixture<MyNetworkInvitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNetworkInvitationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyNetworkInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
