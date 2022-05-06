import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesPageComponent } from './vulnerabilities-page.component';

describe('VulnerabilitiesPageComponent', () => {
  let component: VulnerabilitiesPageComponent;
  let fixture: ComponentFixture<VulnerabilitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VulnerabilitiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnerabilitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
