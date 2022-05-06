import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesNotificationComponent } from './vulnerabilities-notification.component';

describe('VulnerabilitiesNotificationComponent', () => {
  let component: VulnerabilitiesNotificationComponent;
  let fixture: ComponentFixture<VulnerabilitiesNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VulnerabilitiesNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnerabilitiesNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
