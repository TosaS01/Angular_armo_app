import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import {
  ControlStatusEnum,
  ControlStatusColorEnum,
  ControlStatusIconEnum,
  ControlStatusTextEnum,
  IControlStatus,
  ControlStatusType,
} from '@armo/shared';
import { IFrameworkControl } from '@armo/posture/domain';

@Component({
  selector: 'armo-framework-controls-table',
  templateUrl: './framework-controls-table.component.html',
  styleUrls: ['./framework-controls-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkControlsTableComponent {
  displayedColumns = [
    'status',
    'name',
    'description',
    'affectedResourcesCount',
    'remediation',
    'install',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  @Input() set controls(items: IFrameworkControl[] | null) {
    if (items) {
      this.dataSource = new MatTableDataSource(items);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
      });
    }
  }

  getStatus(status: ControlStatusEnum): IControlStatus {
    return {
      name: ControlStatusTextEnum[<ControlStatusType>ControlStatusEnum[status]],
      icon: ControlStatusIconEnum[<ControlStatusType>ControlStatusEnum[status]],
      color:
        ControlStatusColorEnum[<ControlStatusType>ControlStatusEnum[status]],
    };
  }

  getStatusIconClass(status: ControlStatusEnum): string {
    return `color-${this.getStatus(status).color}`;
  }
}
