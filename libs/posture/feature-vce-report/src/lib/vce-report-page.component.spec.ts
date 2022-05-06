import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VceReportPageComponent } from './vce-report-page.component';

describe('VceReportPageComponent', () => {
  let component: VceReportPageComponent;
  let fixture: ComponentFixture<VceReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VceReportPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VceReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
