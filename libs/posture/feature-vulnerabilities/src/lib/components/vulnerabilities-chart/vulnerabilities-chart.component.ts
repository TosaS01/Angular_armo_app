import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FiltersFacade } from '@armo/filters/data-access';
import { VulnerabilitiesFacade } from '@armo/posture/data-access';

import { 
  Vulnerability, 
  VulnerabilityPeriod, 
  VulnerabilitySeverityEnum, 
  VulnerabilitySeverityTextEnum, 
  VulnerabilitySeverityColorEnum 
} from '@armo/posture/domain';

@Component({
  selector: 'armo-vulnerabilities-chart',
  templateUrl: './vulnerabilities-chart.component.html',
  styleUrls: ['./vulnerabilities-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VulnerabilitiesChartComponent implements OnInit, OnDestroy {

  periodArr: VulnerabilityPeriod[] = [
    {
      label: "Last 12 Weeks",
      value: 12
    },
    {
      label: "Last 6 Weeks",
      value: 6
    },
    {
      label: "Last 3 Weeks",
      value: 3
    }
  ];
  selectedPeriod:number = 0; 
  maxArr: number[] = [];

  severityEnum = VulnerabilitySeverityEnum;
  severityEnumText = VulnerabilitySeverityTextEnum;
  severityEnumColor = VulnerabilitySeverityColorEnum;

  #destroyed = new Subject();

  constructor(
    public vulnerabilitiesFacade: VulnerabilitiesFacade,
    private filtersFacade: FiltersFacade
  ) {}

  private _loadVulnerabilitiesOvertimeData(): void {
    this.filtersFacade.selectedScopeFilters$
      .pipe(takeUntil(this.#destroyed))
      .subscribe((scopeFilters) => {
        this.vulnerabilitiesFacade.fetchVulerabilitiesOvertime(scopeFilters, this.selectedPeriod);     
      });     
  } 

  ngOnInit() {
    this.selectedPeriod = this.periodArr[1].value;
    this._loadVulnerabilitiesOvertimeData();   
    this.vulnerabilitiesFacade.vulnerabilitiesOvertime$.subscribe(vulnerabilitiesOvertime => {
      this.maxArr = vulnerabilitiesOvertime.max;     
    }) 
  }

  ngOnDestroy(): void {
    this.#destroyed.next();
    this.#destroyed.complete();
  }

  changePeriod($event: any): void {
    let index: number = 0;
    for (let i = 0; i < this.periodArr.length; i++) {
      if (this.periodArr[i].value === $event.value) {
        index = i;
        break;
      }
    }    
    this.selectedPeriod = this.periodArr[index].value;
    this._loadVulnerabilitiesOvertimeData();
  }

  getClass(str: VulnerabilitySeverityTextEnum): string {
    return `bg-${VulnerabilitySeverityColorEnum[str]}`;
  }

}
