import { Component } from '@angular/core';
import { CustomersFacade } from '@armo/customers/data-access';

@Component({
  selector: 'armo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public customersFacade: CustomersFacade) {
  }

  logout(): void {
    console.log('Logout action');
  }
}
