import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNetworkPageComponent } from './my-network-page.component';

describe('MyNetworkPageComponent', () => {
  let component: MyNetworkPageComponent;
  let fixture: ComponentFixture<MyNetworkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNetworkPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyNetworkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
