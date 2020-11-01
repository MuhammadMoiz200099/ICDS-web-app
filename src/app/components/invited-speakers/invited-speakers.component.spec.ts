import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedSpeakersComponent } from './invited-speakers.component';

describe('InvitedSpeakersComponent', () => {
  let component: InvitedSpeakersComponent;
  let fixture: ComponentFixture<InvitedSpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitedSpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
