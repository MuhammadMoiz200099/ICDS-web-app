import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OversightCommitteeComponent } from './oversight-committee.component';

describe('OversightCommitteeComponent', () => {
  let component: OversightCommitteeComponent;
  let fixture: ComponentFixture<OversightCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OversightCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OversightCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
