import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkControlMapComponent } from './framework-control-map.component';

describe('FrameworkControlMapComponent', () => {
  let component: FrameworkControlMapComponent;
  let fixture: ComponentFixture<FrameworkControlMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrameworkControlMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkControlMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
