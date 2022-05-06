import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalScoreTileComponent } from './total-score-tile.component';

describe('TotalScoreTileComponent', () => {
  let component: TotalScoreTileComponent;
  let fixture: ComponentFixture<TotalScoreTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalScoreTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalScoreTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
