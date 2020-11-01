import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingCommitteeComponent } from './organizing-committee.component';

describe('OrganizingCommitteeComponent', () => {
  let component: OrganizingCommitteeComponent;
  let fixture: ComponentFixture<OrganizingCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizingCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizingCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
