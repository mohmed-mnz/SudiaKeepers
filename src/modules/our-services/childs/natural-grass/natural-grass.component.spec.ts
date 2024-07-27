import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalGrassComponent } from './natural-grass.component';

describe('NaturalGrassComponent', () => {
  let component: NaturalGrassComponent;
  let fixture: ComponentFixture<NaturalGrassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalGrassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaturalGrassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
