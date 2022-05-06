import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { VulnerabilitySeverityTextEnum, VulnerabilitySeverityColorEnum } from '@armo/posture/domain';

@Component({
  selector: 'armo-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusbarComponent {

  @Input() severity: VulnerabilitySeverityTextEnum = VulnerabilitySeverityTextEnum['Critical'];
  @Input() stripeWidth: number = 0;
  @Input() solidWidth: number = 0;    
 
  getClass(str: VulnerabilitySeverityTextEnum): string {
    return `bg-${VulnerabilitySeverityColorEnum[str]}`;
  }

  getStripeClass(str: VulnerabilitySeverityTextEnum): string {
    return `bg-${VulnerabilitySeverityColorEnum[str]}-stripe`;
  }
}
