import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClustersOvertimeListComponent } from './clusters-overtime-list.component';

describe('ClustersOvertimeListComponent', () => {
  let component: ClustersOvertimeListComponent;
  let fixture: ComponentFixture<ClustersOvertimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClustersOvertimeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClustersOvertimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
