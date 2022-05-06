import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesFilterItemComponent } from './vulnerabilities-filter-item.component';

describe('VulnerabilitiesFilterItemComponent', () => {
  let component: VulnerabilitiesFilterItemComponent;
  let fixture: ComponentFixture<VulnerabilitiesFilterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VulnerabilitiesFilterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnerabilitiesFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
