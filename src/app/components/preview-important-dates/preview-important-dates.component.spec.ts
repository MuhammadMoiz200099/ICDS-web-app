import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewImportantDatesComponent } from './preview-important-dates.component';

describe('PreviewImportantDatesComponent', () => {
  let component: PreviewImportantDatesComponent;
  let fixture: ComponentFixture<PreviewImportantDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewImportantDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewImportantDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
