import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PergolasComponent } from './pergolas.component';

describe('PergolasComponent', () => {
  let component: PergolasComponent;
  let fixture: ComponentFixture<PergolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PergolasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PergolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
