import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeChartComponent } from './overtime-chart.component';

describe('OvertimeChartComponent', () => {
  let component: OvertimeChartComponent;
  let fixture: ComponentFixture<OvertimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvertimeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
