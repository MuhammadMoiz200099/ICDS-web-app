import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForPaperComponent } from './call-for-paper.component';

describe('CallForPaperComponent', () => {
  let component: CallForPaperComponent;
  let fixture: ComponentFixture<CallForPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallForPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
