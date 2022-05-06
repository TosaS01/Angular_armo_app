import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFrameworkControl } from '@armo/posture/domain';
import { Dictionary } from '@ngrx/entity';
import { ControlStatusEnum } from '@armo/shared';

@Component({
  selector: 'armo-framework-control-map',
  templateUrl: './framework-control-map.component.html',
  styleUrls: ['./framework-control-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkControlMapComponent {
  sections: Dictionary<IFrameworkControl[]> = {};

  @Input() set controls(items: IFrameworkControl[] | null) {
    if (items) {
      this.sections = items.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.section]: items.filter((item) =>
            Object.is(item.section, curr.section)
          ),
        }),
        {}
      );
    }
  }

  isBadgeVisible(control: IFrameworkControl): boolean {
    return !!control.affectedResourcesCount;
  }

  isPassed(control: IFrameworkControl): boolean {
    return Object.is(control.status, ControlStatusEnum.Passed);
  }

  isWarning(control: IFrameworkControl): boolean {
    return Object.is(control.status, ControlStatusEnum.Warning);
  }
}
