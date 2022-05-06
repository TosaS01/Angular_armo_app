import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'armo-rbac-page',
  templateUrl: './rbac-page.component.html',
  styleUrls: ['./rbac-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RbacPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
