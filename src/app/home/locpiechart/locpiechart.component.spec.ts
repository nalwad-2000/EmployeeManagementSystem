import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocpiechartComponent } from './locpiechart.component';

describe('LocpiechartComponent', () => {
  let component: LocpiechartComponent;
  let fixture: ComponentFixture<LocpiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocpiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocpiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
