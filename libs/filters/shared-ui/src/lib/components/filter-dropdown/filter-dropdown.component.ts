import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IFilter } from '@armo/filters/domain';

@Component({
  selector: 'armo-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDropdownComponent {
  @Input() title!: string;
  @Input() items!: IFilter[] | null;
  @Input() selectedItems!: string[] | null;

  @Output() select = new EventEmitter<{ item: IFilter, checked: boolean }>();

  isChecked(item: IFilter): boolean {
    return this.selectedItems ? this.selectedItems.includes(item.name) : false;
  }

  onSelect(item: IFilter): void {
    this.select.emit({ item, checked: !this.isChecked(item) });
  }
}
