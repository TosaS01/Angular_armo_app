import { Directive, HostListener } from '@angular/core'
import { BackNavigationService } from './back-navigation.service';

@Directive({
  selector: '[backButton]',
})
export class BackButtonDirective {
  constructor(
    private navigation: BackNavigationService
  ) {
  }

  @HostListener('click')
  onClick(): void {
    this.navigation.back()
  }
}
