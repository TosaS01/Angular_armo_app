import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISideNavItem } from '../interfaces';
import { sideNavMenuConfig } from '../config';

@Injectable()
export class SideNavMenuService {
  #sideNavMenuItemsSubject$ = new BehaviorSubject<ISideNavItem[]>(sideNavMenuConfig);
  sideNavMenuItems$ = this.#sideNavMenuItemsSubject$.asObservable();

  get sideNavMenuItems() {
    return this.#sideNavMenuItemsSubject$.value;
  }

  updateNavItem(navItem: ISideNavItem) {
    this.#sideNavMenuItemsSubject$.next(
      this.sideNavMenuItems.map(item => {
        if (Object.is(navItem.id, item.id)) {
          return {...item, ...navItem};
        }
        return item;
      })
    );
  }
}
