import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '@armo/customers/domain';

@Component({
  selector: 'armo-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent {

  @Input() customers!: Customer[] | null;
  @Input() selectedCustomerGuid!: string | null;
  @Output() select = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();

  constructor() { }

  isActive(guid: string): boolean {
    return Object.is(guid, this.selectedCustomerGuid);
  }

  selectCustomer(guid: string): void {
    this.select.emit(guid);
  }

  logOut(): void {
    this.logout.emit();
  }

}
