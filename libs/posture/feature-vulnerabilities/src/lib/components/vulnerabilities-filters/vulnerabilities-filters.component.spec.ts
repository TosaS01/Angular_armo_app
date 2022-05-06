import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesFiltersComponent } from './vulnerabilities-filters.component';

describe('VulnerabilitiesFiltersComponent', () => {
  let component: VulnerabilitiesFiltersComponent;
  let fixture: ComponentFixture<VulnerabilitiesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VulnerabilitiesFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnerabilitiesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
