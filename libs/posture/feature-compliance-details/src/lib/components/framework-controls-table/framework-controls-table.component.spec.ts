import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkControlsTableComponent } from './framework-controls-table.component';

describe('FrameworkControlsTableComponent', () => {
  let component: FrameworkControlsTableComponent;
  let fixture: ComponentFixture<FrameworkControlsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrameworkControlsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkControlsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
