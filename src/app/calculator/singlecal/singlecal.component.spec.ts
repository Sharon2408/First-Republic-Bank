import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecalComponent } from './singlecal.component';

describe('SinglecalComponent', () => {
  let component: SinglecalComponent;
  let fixture: ComponentFixture<SinglecalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglecalComponent]
    });
    fixture = TestBed.createComponent(SinglecalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
