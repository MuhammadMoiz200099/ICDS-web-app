import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalCommitteeComponent } from './technical-committee.component';

describe('ReviewerCommitteeComponent', () => {
  let component: TechnicalCommitteeComponent;
  let fixture: ComponentFixture<TechnicalCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
