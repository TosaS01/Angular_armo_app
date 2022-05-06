import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FiltersFacade } from '@armo/filters/data-access';
import { VulnerabilitiesFacade } from '@armo/posture/data-access';

@Component({
  selector: 'armo-vulnerabilities-filters',
  templateUrl: './vulnerabilities-filters.component.html',
  styleUrls: ['./vulnerabilities-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VulnerabilitiesFiltersComponent implements OnInit, OnDestroy{
  
  #destroyed = new Subject();

  constructor(
    public vulnerabilitiesFacade: VulnerabilitiesFacade,
    private filtersFacade: FiltersFacade
  ) {}

  max: number = 0;
  total: number = 0;
  fixedTotal: number = 0;
  relevance: number = 0;  

  private _loadVulnerabilitiesData(): void {
    this.filtersFacade.selectedScopeFilters$
      .pipe(takeUntil(this.#destroyed))
      .subscribe((scopeFilters) => {
        this.vulnerabilitiesFacade.fetchVulerabilities(scopeFilters);      
      });  
  }

  private _getStatus(): void {
    this.vulnerabilitiesFacade.vulnerabilities$     
      .subscribe((vulnerabilities) => {
        vulnerabilities.forEach(vulnerability => {
          this.total += vulnerability.total;
          this.fixedTotal += vulnerability.fixedTotal;
          this.relevance += vulnerability.totalRelevant + vulnerability.fixedRelevant;
          if (this.max < vulnerability.fixedRelevant + vulnerability.fixedTotal) {
            this.max = vulnerability.fixedRelevant + vulnerability.fixedTotal;
          }
          if (this.max < vulnerability.totalRelevant + vulnerability.total) {
            this.max = vulnerability.totalRelevant + vulnerability.total;
          }
        });        
      });    
  }
  
  ngOnInit(): void {
     this._loadVulnerabilitiesData();
     this._getStatus();
  }

  ngOnDestroy(): void {
    this.#destroyed.next();
    this.#destroyed.complete();
  }
     
}