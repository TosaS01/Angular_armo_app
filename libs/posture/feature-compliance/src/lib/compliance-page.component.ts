import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FiltersFacade } from '@armo/filters/data-access';
import { ClustersOvertimeFacade } from '@armo/posture/data-access';
import { ISelectedFilters } from '@armo/filters/domain';

@Component({
  selector: 'armo-compliance-page',
  templateUrl: './compliance-page.component.html',
  styleUrls: ['./compliance-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompliancePageComponent implements OnInit, OnDestroy {
  #destroyed = new Subject();
  #scopeFilters!: ISelectedFilters;

  constructor(
    private filtersFacade: FiltersFacade,
    public clustersOvertimeFacade: ClustersOvertimeFacade
  ) {}

  private _loadData(): void {
    this.filtersFacade.selectedScopeFilters$
      .pipe(takeUntil(this.#destroyed))
      .subscribe((scopeFilters) => {
        this.#scopeFilters = scopeFilters;
        this.clustersOvertimeFacade.fetchClustersOvertimeList(scopeFilters);
      });
  }

  onSearch(searchText: string): void {
    this.clustersOvertimeFacade.fetchClustersOvertimeList(this.#scopeFilters, searchText);
  }

  ngOnInit(): void {
    this._loadData();
  }

  ngOnDestroy(): void {
    this.#destroyed.next();
    this.#destroyed.complete();
  }
}
