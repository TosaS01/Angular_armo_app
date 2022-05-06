import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClustersOvertimeTileComponent } from './clusters-overtime-tile.component';

describe('ClustersOvertimeTileComponent', () => {
  let component: ClustersOvertimeTileComponent;
  let fixture: ComponentFixture<ClustersOvertimeTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClustersOvertimeTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClustersOvertimeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
