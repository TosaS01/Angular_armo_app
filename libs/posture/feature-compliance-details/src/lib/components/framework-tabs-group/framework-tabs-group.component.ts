import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FrameworkDataViewTypeEnum } from '../../enums';
import { IFrameworkControl, IFrameworkResource } from '@armo/posture/domain';

@Component({
  selector: 'armo-framework-tabs-group',
  templateUrl: './framework-tabs-group.component.html',
  styleUrls: ['./framework-tabs-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkTabsGroupComponent {
  @Input() frameworks!: string[] | null;
  @Input() controls!: IFrameworkControl[] | null;
  @Input() resources!: IFrameworkResource[] | null;
  @Input() controlsTotal!: number | null;
  @Input() resourcesTotal!: number | null;

  @Output() selectFramework = new EventEmitter<string>();
  @Output() changeResourceKind = new EventEmitter<string>();

  frameworkDataViewTypeEnum = FrameworkDataViewTypeEnum;
  frameworkDataViewType: FrameworkDataViewTypeEnum =
    FrameworkDataViewTypeEnum.Controls;

  constructor() {}

  private getFrameworkName(tabIndex: number): string {
    return this.frameworks ? this.frameworks[tabIndex] : '';
  }

  onTabChange(event: MatTabChangeEvent): void {
    const frameworkName = this.getFrameworkName(event.index);
    this.selectFramework.emit(frameworkName);
    console.log(frameworkName);
  }

  onSelectedIndexChange(event: number) {
    console.log(event);
  }

  onResourceKindChange(kind: string): void {
    this.changeResourceKind.emit(kind);
  }
}
