import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationNetworkComponent } from './irrigation-network.component';

describe('IrrigationNetworkComponent', () => {
  let component: IrrigationNetworkComponent;
  let fixture: ComponentFixture<IrrigationNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrrigationNetworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IrrigationNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
