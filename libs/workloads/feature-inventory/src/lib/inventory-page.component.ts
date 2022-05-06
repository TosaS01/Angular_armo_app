import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'armo-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
