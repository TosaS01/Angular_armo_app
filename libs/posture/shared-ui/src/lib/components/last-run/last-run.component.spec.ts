import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRunComponent } from './last-run.component';

describe('LastRunComponent', () => {
  let component: LastRunComponent;
  let fixture: ComponentFixture<LastRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
