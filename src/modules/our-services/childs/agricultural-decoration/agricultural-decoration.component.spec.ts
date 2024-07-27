import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalDecorationComponent } from './agricultural-decoration.component';

describe('AgriculturalDecorationComponent', () => {
  let component: AgriculturalDecorationComponent;
  let fixture: ComponentFixture<AgriculturalDecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgriculturalDecorationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgriculturalDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
