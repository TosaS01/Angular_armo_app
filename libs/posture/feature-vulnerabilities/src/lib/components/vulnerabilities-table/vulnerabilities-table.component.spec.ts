import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesTableComponent } from './vulnerabilities-table.component';

describe('VulnerabilitiesTableComponent', () => {
  let component: VulnerabilitiesTableComponent;
  let fixture: ComponentFixture<VulnerabilitiesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VulnerabilitiesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnerabilitiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
