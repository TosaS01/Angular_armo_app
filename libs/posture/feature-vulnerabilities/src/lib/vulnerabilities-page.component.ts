import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { retry, takeUntil } from 'rxjs/operators';
import { FiltersFacade } from '@armo/filters/data-access';
import { VulnerabilitiesFacade } from '@armo/posture/data-access';

@Component({
  selector: 'armo-vulnerabilities-page',
  templateUrl: './vulnerabilities-page.component.html',
  styleUrls: ['./vulnerabilities-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VulnerabilitiesPageComponent implements OnInit {

  constructor(
    public vulnerabilitiesFacade: VulnerabilitiesFacade,
    private filtersFacade: FiltersFacade
  ){}

  #destroyed = new Subject();

  private _loadVulnerabilitiesSumSummaryData(): void {
    this.filtersFacade.selectedScopeFilters$
      .pipe(takeUntil(this.#destroyed))
      .subscribe((scopeFilters) => {
        this.vulnerabilitiesFacade.fetchVulerabilitiesSumSummary(scopeFilters);      
      });  
  }

  ngOnInit(): void {        
    this._loadVulnerabilitiesSumSummaryData();
  }
  
}