import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FountainsComponent } from './fountains.component';

describe('FountainsComponent', () => {
  let component: FountainsComponent;
  let fixture: ComponentFixture<FountainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FountainsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FountainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
