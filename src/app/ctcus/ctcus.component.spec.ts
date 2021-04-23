import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtcusComponent } from './ctcus.component';

describe('CtcusComponent', () => {
  let component: CtcusComponent;
  let fixture: ComponentFixture<CtcusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtcusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtcusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
