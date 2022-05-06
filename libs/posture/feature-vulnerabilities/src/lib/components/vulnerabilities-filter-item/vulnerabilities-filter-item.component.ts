import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import { Vulnerability, VulnerabilitySeverityTextEnum, VulnerabilitySeverityEnum, VulnerabilitySeverityColorEnum } from '@armo/posture/domain';

@Component({
  selector: 'armo-vulnerabilities-filter-item',
  templateUrl: './vulnerabilities-filter-item.component.html',
  styleUrls: ['./vulnerabilities-filter-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VulnerabilitiesFilterItemComponent implements OnInit {

  @Input() vulnerability:Vulnerability = {    
    severity: VulnerabilitySeverityTextEnum['Critical'],
    totalRelevant: 0,
    fixedRelevant: 0,
    fixedTotal: 0,
    total: 0
  };   
  @Input() max: number = 0;
  
  severityEnumText = VulnerabilitySeverityTextEnum;
  severityEnumColor = VulnerabilitySeverityColorEnum;
  totalWidth: number = 0;
  totalRelevantWidth: number = 0;
  fixedTotalWidth: number = 0;
  fixedRelevantWidth: number = 0;

  constructor(private hostElement: ElementRef) {}

  ngOnInit(): void {
    const parentWidth = this.hostElement.nativeElement.offsetWidth;   
    const labelWidth = (document.getElementsByClassName("item-title")[0] as HTMLElement).offsetWidth;
    const barWidth = parentWidth - labelWidth - 80;
    this.totalRelevantWidth = barWidth / this.max * this.vulnerability.totalRelevant;
    this.totalWidth = barWidth / this.max * this.vulnerability.total;
    this.fixedRelevantWidth = barWidth / this.max * this.vulnerability.fixedRelevant;
    this.fixedTotalWidth = barWidth / this.max * this.vulnerability.total;
  }

  getClass(str: VulnerabilitySeverityTextEnum): string {
    return `color-${this.severityEnumColor[str]}`;
  }
  
}
