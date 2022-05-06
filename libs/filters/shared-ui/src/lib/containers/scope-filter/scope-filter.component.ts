import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomersFacade } from '@armo/customers/data-access';
import { FiltersFacade } from '@armo/filters/data-access';

@Component({
  selector: 'armo-scope-filter',
  templateUrl: './scope-filter.component.html',
  styleUrls: ['./scope-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScopeFilterComponent implements OnInit {

  #destroyed = new Subject();

  constructor(
    private customersFacade: CustomersFacade,
    public filtersFacade: FiltersFacade
  ) { }

  private _initFilters(): void {
    this.customersFacade.selectedCustomer$
      .pipe(takeUntil(this.#destroyed))
      .subscribe((guid) => {
        this.filtersFacade.clearSelection();
        this.filtersFacade.loadFilters();
      });
  }

  ngOnInit(): void {
    this._initFilters();
  }

  ngOnDestroy(): void {
    this.#destroyed.next();
    this.#destroyed.complete();
  }

}
