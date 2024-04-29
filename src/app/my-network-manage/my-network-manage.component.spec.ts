import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNetworkManageComponent } from './my-network-manage.component';

describe('MyNetworkManageComponent', () => {
  let component: MyNetworkManageComponent;
  let fixture: ComponentFixture<MyNetworkManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNetworkManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyNetworkManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
