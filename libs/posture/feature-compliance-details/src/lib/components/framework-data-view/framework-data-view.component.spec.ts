import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkDataViewComponent } from './framework-data-view.component';

describe('FrameworkDataViewComponent', () => {
  let component: FrameworkDataViewComponent;
  let fixture: ComponentFixture<FrameworkDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrameworkDataViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
