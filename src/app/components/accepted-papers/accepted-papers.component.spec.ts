import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedPapersComponent } from './accepted-papers.component';

describe('AcceptedPapersComponent', () => {
  let component: AcceptedPapersComponent;
  let fixture: ComponentFixture<AcceptedPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
