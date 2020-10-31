import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeAndObjectiveComponent } from './scope-and-objective.component';

describe('ScopeAndObjectiveComponent', () => {
  let component: ScopeAndObjectiveComponent;
  let fixture: ComponentFixture<ScopeAndObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopeAndObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeAndObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
