import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTechnicalProgramComponent } from './detailed-technical-program.component';

describe('DetailedTechnicalProgramComponent', () => {
  let component: DetailedTechnicalProgramComponent;
  let fixture: ComponentFixture<DetailedTechnicalProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedTechnicalProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedTechnicalProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
