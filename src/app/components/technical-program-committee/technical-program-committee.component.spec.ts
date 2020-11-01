import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalProgramCommitteeComponent } from './technical-program-committee.component';

describe('TechnicalProgramCommitteeComponent', () => {
  let component: TechnicalProgramCommitteeComponent;
  let fixture: ComponentFixture<TechnicalProgramCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalProgramCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalProgramCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
