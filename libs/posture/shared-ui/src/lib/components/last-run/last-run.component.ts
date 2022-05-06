import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'armo-last-run',
  templateUrl: './last-run.component.html',
  styleUrls: ['./last-run.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastRunComponent {
  @Input() lastRunDate!: string | number | Date | undefined;

  @Output() runScan = new EventEmitter<void>();

  refresh(): void {
    this.runScan.emit();
  }
}