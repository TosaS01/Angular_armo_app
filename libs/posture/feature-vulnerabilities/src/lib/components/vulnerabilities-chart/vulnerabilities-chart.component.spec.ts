import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesChartComponent } from './vulnerabilities-chart.component';

describe('VulnerabilitiesChartComponent', () => {
  let component: VulnerabilitiesChartComponent;
  let fixture: ComponentFixture<VulnerabilitiesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VulnerabilitiesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnerabilitiesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
