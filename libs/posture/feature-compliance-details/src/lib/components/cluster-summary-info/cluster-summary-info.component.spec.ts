import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterSummaryInfoComponent } from './cluster-summary-info.component';

describe('ClusterSummaryInfoComponent', () => {
  let component: ClusterSummaryInfoComponent;
  let fixture: ComponentFixture<ClusterSummaryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterSummaryInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterSummaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
