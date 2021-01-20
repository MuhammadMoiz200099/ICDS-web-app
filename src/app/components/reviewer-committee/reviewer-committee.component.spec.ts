import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerCommitteeComponent } from './reviewer-committee.component';

describe('ReviewerCommitteeComponent', () => {
  let component: ReviewerCommitteeComponent;
  let fixture: ComponentFixture<ReviewerCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
