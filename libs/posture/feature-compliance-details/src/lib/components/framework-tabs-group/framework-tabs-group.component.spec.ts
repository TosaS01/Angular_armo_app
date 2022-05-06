import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkTabsGroupComponent } from './framework-tabs-group.component';

describe('FrameworkTabsGroupComponent', () => {
  let component: FrameworkTabsGroupComponent;
  let fixture: ComponentFixture<FrameworkTabsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrameworkTabsGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkTabsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
