import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { VulnerabilitiesRepository } from '@armo/posture/api';
import { 
  Vulnerability, 
  VulnerabilityOvertime, 
  VulnerabilitySeverityEnum, 
  VulnerabilityOvertimeData,
  VulnerabilitySumSummary,
  VulnerabilitySummaryData,
  VulnerabilitySummaryTable 
} from '@armo/posture/domain';
import { ISelectedFilters } from '@armo/filters/domain';
import { CustomersFacade } from '@armo/customers/data-access';

@Injectable({ providedIn: 'root' })
export class VulnerabilitiesFacade {

  vulnerabilities$: Observable<Vulnerability[]>;
  #vulnerabilitiesSubject$ = new BehaviorSubject<Vulnerability[]>([]);

  vulnerabilitiesOvertime$: Observable<VulnerabilityOvertimeData>;
  #vulnerabilitiesOvertimeSubject$ = new BehaviorSubject<VulnerabilityOvertimeData>({data: [], max: []});

  vulnerabilitiesSumsummary$: Observable<VulnerabilitySummaryData>;
  #vulnerabilitiesSumsummarySubject$ = new BehaviorSubject<VulnerabilitySummaryData>({data: []});

  constructor(
    private vulnerabilitiesRepository: VulnerabilitiesRepository,
    private customersFacade: CustomersFacade,
  ) {
    this.vulnerabilities$ = this.#vulnerabilitiesSubject$.asObservable(); 
    this.vulnerabilitiesOvertime$ = this.#vulnerabilitiesOvertimeSubject$.asObservable();
    this.vulnerabilitiesSumsummary$ = this.#vulnerabilitiesSumsummarySubject$.asObservable();        
  }
  
  fetchVulerabilities(scopeFilter: ISelectedFilters): Observable<Vulnerability[]> {
    const customerGuid = this.customersFacade.selectedCustomer;
    const result = this.vulnerabilitiesRepository.fetchVulnerabilities(
      customerGuid,
      scopeFilter.cluster,
      scopeFilter.datacenter,
      scopeFilter.namespace,
      scopeFilter.project
    ).pipe(share());
    result.subscribe((vulnerabilities: Vulnerability[]) => this.#vulnerabilitiesSubject$.next(vulnerabilities));   
    return result;
  }

  fetchVulerabilitiesOvertime(scopeFilter: ISelectedFilters, selectedPeriod: number): void {
    const customerGuid = this.customersFacade.selectedCustomer;
    const result = this.vulnerabilitiesRepository.fetchVulnerabilitiesOvertime(
      customerGuid,
      scopeFilter.cluster,
      scopeFilter.datacenter,
      scopeFilter.namespace,
      scopeFilter.project
    ).pipe(share());
    this._getOvertimeData(result, selectedPeriod);    
  }

  private _getOvertimeData(result:Observable<VulnerabilityOvertime[]>, selectedPeriod:number): void {
    let dataArr: number[][] = [];
    let maxArr: number[] = [0, 0, 0, 0, 0];
    for (let i = 1; i < selectedPeriod; i++) {

      let dataItem: number[] = [i, 0, 0, 0, 0];
      const today:Date = new Date();
       
      result    
        .subscribe((vulnerabilitiesOvertime:VulnerabilityOvertime[]) => {
          vulnerabilitiesOvertime.forEach(data => {
            for (let j = 0; j < data.cords.length; j++) {
              const date:Date = new Date(data.cords[j].timestamp);
              const diffTime = today.getTime() - date.getTime();
              const diffWeeks:number = diffTime / (1000 * 60 * 60 * 24 * 7);
                        
              if (i - 1 <= diffWeeks && diffWeeks < i ) {
                dataItem[VulnerabilitySeverityEnum[data.severity]] += data.cords[j].value;
                maxArr[VulnerabilitySeverityEnum[data.severity]] += data.cords[j].value;
              }                          
            }
            
          })
          dataArr.push(dataItem);   
          this.#vulnerabilitiesOvertimeSubject$.next({data:dataArr, max:maxArr});  
        })         
    }      
  }  

  fetchVulerabilitiesSumSummary(scopeFilter: ISelectedFilters): void {
    const customerGuid = this.customersFacade.selectedCustomer;
    const result = this.vulnerabilitiesRepository.fetchVulnerabilitiesSumSummary(
      customerGuid,
      scopeFilter.cluster,
      scopeFilter.datacenter,
      scopeFilter.namespace,
      scopeFilter.project
    ).pipe(share());
    this._getSummaryData(result);    
  }

  private _getSummaryData(result:Observable<VulnerabilitySumSummary[]>): void {
    let items: VulnerabilitySummaryTable[] = [];
    result     
      .subscribe((vulnerabilitiesSumsummaries) => {
        vulnerabilitiesSumsummaries.forEach(vulnerabilitiesSumsummary => {

          let severitiesSum: number[] = [0,0,0,0,0];          
          vulnerabilitiesSumsummary.severitiesSum.forEach((sum, index) => {
            severitiesSum[VulnerabilitySeverityEnum[sum.relevancy]] = sum.sum;            
          })

          let relevanciesSum: number[] = [0,0,0,0,0];
          vulnerabilitiesSumsummary.relevanciesSum.forEach((sum) => {
            relevanciesSum[VulnerabilitySeverityEnum[sum.relevancy]] = sum.sum;
          })

          let fixAvailbleSum: number[] = [0,0,0,0,0];
          vulnerabilitiesSumsummary.fixAvailbleSum.forEach((sum) => {
            fixAvailbleSum[VulnerabilitySeverityEnum[sum.relevancy]] = sum.sum;
          })

          items.push({
            scanTime: new Date(vulnerabilitiesSumsummary.timestamp),
            status: vulnerabilitiesSumsummary.status,
            wlid: vulnerabilitiesSumsummary.wlid,
            container: vulnerabilitiesSumsummary.containerName,
            registry: vulnerabilitiesSumsummary.registry,
            imageTag: vulnerabilitiesSumsummary.imageTag,
            severitiesSum: severitiesSum,
            relevanciesSum: relevanciesSum,
            fixAvailbleSum: fixAvailbleSum            
          })
        })
        this.#vulnerabilitiesSumsummarySubject$.next({data:items}); 
      })    
  }
  
}