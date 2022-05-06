import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'armo-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
