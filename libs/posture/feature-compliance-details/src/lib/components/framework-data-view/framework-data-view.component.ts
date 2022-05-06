import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FrameworkDataViewTypeEnum } from '../../enums';
import { IFrameworkControl, IFrameworkResource } from '@armo/posture/domain';

@Component({
  selector: 'armo-framework-data-view',
  templateUrl: './framework-data-view.component.html',
  styleUrls: ['./framework-data-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkDataViewComponent {
  @Input() controls!: IFrameworkControl[] | null;
  @Input() resources!: IFrameworkResource[] | null;
  @Input() controlsTotal!: number | null;
  @Input() resourcesTotal!: number | null;

  @Output() changeResourceKind = new EventEmitter<string>();

  frameworkDataViewTypeEnum = FrameworkDataViewTypeEnum;
  frameworkDataViewType: FrameworkDataViewTypeEnum =
    FrameworkDataViewTypeEnum.Controls;

  onDataViewChange(event: MatButtonToggleChange): void {
    this.frameworkDataViewType = event.value;
  }

  onChangeResourceKind(kind: string): void {
    this.changeResourceKind.emit(kind);
  }
}
