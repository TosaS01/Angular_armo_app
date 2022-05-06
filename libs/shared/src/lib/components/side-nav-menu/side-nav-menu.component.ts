import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { SideNavMenuService } from './services';
import { ISideNavItem } from './interfaces';

@Component({
  selector: 'armo-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavMenuComponent {
  @HostBinding('class.expanded') get isExpanded() {
    return this.#isExpanded;
  }
  #isExpanded = true;

  constructor(
    public sideNavMenuService: SideNavMenuService
) { }

  toggleMenu(): void {
    this.#isExpanded = !this.#isExpanded;
  }

  toggleMenuItem(navItem: ISideNavItem): void {
    this.sideNavMenuService.updateNavItem(navItem);
  }
}
