import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ISideNavItem } from '../../interfaces';

@Component({
  selector: 'armo-nav-items-list',
  templateUrl: './nav-items-list.component.html',
  styleUrls: ['./nav-items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemsListComponent {
  @Input() isMenuExpanded!: boolean;
  @Input() navItems!: ISideNavItem[] | null;

  @Output() toggle = new EventEmitter<ISideNavItem>();

  isVisible(navItem: ISideNavItem): boolean {
    const parentNavItem = this.navItems?.find((item) => Object.is(item.id, navItem.parentId));
    return !navItem.parentId || <boolean>parentNavItem?.isExpanded;
  }

  isChild(navItem: ISideNavItem): boolean {
    return !!navItem.parentId;
  }

  toggleNavMenuItem(navItem: ISideNavItem): void {
    this.toggle.emit({
      ...navItem,
      isExpanded: !navItem.isExpanded
    });
  }
}
