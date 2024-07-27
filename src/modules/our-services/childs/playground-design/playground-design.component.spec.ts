import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundDesignComponent } from './playground-design.component';

describe('PlaygroundDesignComponent', () => {
  let component: PlaygroundDesignComponent;
  let fixture: ComponentFixture<PlaygroundDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaygroundDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
