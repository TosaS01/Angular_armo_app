import { TestBed, waitForAsync } from '@angular/core/testing';
import { UtilHttpModule } from './util-http.module';

describe('UtilHttpModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UtilHttpModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UtilHttpModule).toBeDefined();
  });
});
