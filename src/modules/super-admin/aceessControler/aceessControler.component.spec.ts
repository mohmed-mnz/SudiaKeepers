/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AceessControlerComponent } from './aceessControler.component';

describe('AceessControlerComponent', () => {
  let component: AceessControlerComponent;
  let fixture: ComponentFixture<AceessControlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceessControlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceessControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
