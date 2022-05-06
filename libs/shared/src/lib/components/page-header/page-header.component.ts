import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'armo-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {
  @Input() pageTitle!: string;
  @Input() showBackButton!: boolean;
}
