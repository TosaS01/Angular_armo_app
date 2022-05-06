import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'armo-top-nav-menu',
  templateUrl: './top-nav-menu.component.html',
  styleUrls: ['./top-nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
