import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCalculationComponent } from './grade-calculation.component';

describe('GradeCalculationComponent', () => {
  let component: GradeCalculationComponent;
  let fixture: ComponentFixture<GradeCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradeCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradeCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
