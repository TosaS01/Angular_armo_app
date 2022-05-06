import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkResourcesTableComponent } from './framework-resources-table.component';

describe('FrameworkResourcesTableComponent', () => {
  let component: FrameworkResourcesTableComponent;
  let fixture: ComponentFixture<FrameworkResourcesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrameworkResourcesTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkResourcesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
