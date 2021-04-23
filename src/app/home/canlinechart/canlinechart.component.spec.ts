import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanlinechartComponent } from './canlinechart.component';

describe('CanlinechartComponent', () => {
  let component: CanlinechartComponent;
  let fixture: ComponentFixture<CanlinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanlinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanlinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
