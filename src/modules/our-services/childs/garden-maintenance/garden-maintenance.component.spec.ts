import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenMaintenanceComponent } from './garden-maintenance.component';

describe('GardenMaintenanceComponent', () => {
  let component: GardenMaintenanceComponent;
  let fixture: ComponentFixture<GardenMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardenMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardenMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
