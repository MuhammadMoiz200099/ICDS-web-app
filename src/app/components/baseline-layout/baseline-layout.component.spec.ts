import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineLayoutComponent } from './baseline-layout.component';

describe('BaselineLayoutComponent', () => {
  let component: BaselineLayoutComponent;
  let fixture: ComponentFixture<BaselineLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselineLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselineLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
