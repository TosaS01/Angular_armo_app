import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTilesListComponent } from './score-tiles-list.component';

describe('ScoreTilesListComponent', () => {
  let component: ScoreTilesListComponent;
  let fixture: ComponentFixture<ScoreTilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreTilesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreTilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
