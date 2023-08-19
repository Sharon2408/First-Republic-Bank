import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrbcalculatorComponent } from './frbcalculator.component';

describe('FrbcalculatorComponent', () => {
  let component: FrbcalculatorComponent;
  let fixture: ComponentFixture<FrbcalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrbcalculatorComponent]
    });
    fixture = TestBed.createComponent(FrbcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
