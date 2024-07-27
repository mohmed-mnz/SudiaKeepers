import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesAndFlowersComponent } from './trees-and-flowers.component';

describe('TreesAndFlowersComponent', () => {
  let component: TreesAndFlowersComponent;
  let fixture: ComponentFixture<TreesAndFlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreesAndFlowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreesAndFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
