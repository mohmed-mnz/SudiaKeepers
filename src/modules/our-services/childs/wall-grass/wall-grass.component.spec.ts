import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallGrassComponent } from './wall-grass.component';

describe('WallGrassComponent', () => {
  let component: WallGrassComponent;
  let fixture: ComponentFixture<WallGrassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallGrassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WallGrassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
