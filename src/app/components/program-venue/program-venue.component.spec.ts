import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramVenueComponent } from './program-venue.component';

describe('ProgramVenueComponent', () => {
  let component: ProgramVenueComponent;
  let fixture: ComponentFixture<ProgramVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
