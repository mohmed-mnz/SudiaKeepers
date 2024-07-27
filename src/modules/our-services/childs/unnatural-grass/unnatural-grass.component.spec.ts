import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnnaturalGrassComponent } from './unnatural-grass.component';

describe('UnnaturalGrassComponent', () => {
  let component: UnnaturalGrassComponent;
  let fixture: ComponentFixture<UnnaturalGrassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnnaturalGrassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnnaturalGrassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
