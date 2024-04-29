import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNetworkBodyComponent } from './my-network-body.component';

describe('MyNetworkBodyComponent', () => {
  let component: MyNetworkBodyComponent;
  let fixture: ComponentFixture<MyNetworkBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNetworkBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyNetworkBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
