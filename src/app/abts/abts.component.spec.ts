import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtsComponent } from './abts.component';

describe('AbtsComponent', () => {
  let component: AbtsComponent;
  let fixture: ComponentFixture<AbtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
