import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { 
  VulnerabilitySeverityEnum, 
  VulnerabilitySeverityColorEnum, 
  VulnerabilitySeverityTextEnum,
  VulnerabilitySummaryTable 
} from '@armo/posture/domain';

@Component({
  selector: 'armo-vulnerabilities-table',
  templateUrl: './vulnerabilities-table.component.html',
  styleUrls: ['./vulnerabilities-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VulnerabilitiesTableComponent {

  displayedColumns = ['mark', 'scan-time', 'status', 'wlid', 'cont', 'reg', 'image-tag', 'critical', 'high', 'med', 'low'];
  dataSource!: MatTableDataSource<VulnerabilitySummaryTable>;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;    

  vulnerabilitySeverityEnum = VulnerabilitySeverityEnum;  
  vulnerabilityTextEnum = VulnerabilitySeverityTextEnum;

  @Input() 
  set data(value: VulnerabilitySummaryTable[] | undefined) {
    if (value !== undefined) {
      this.dataSource = new MatTableDataSource(value)
    }    
  }

  getZeroClass(sum: number): string {
    if (sum === 0) {
      return 'sum-zero';
    }
    return '';
  }

  getColorClass(str: VulnerabilitySeverityTextEnum): string {
    return `color-${VulnerabilitySeverityColorEnum[str]}`;
  }

}
