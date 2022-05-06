import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IFrameworkResource } from '@armo/posture/domain';
import { ResourceIconEnum, ResourceKindEnum } from '@armo/shared';

@Component({
  selector: 'armo-framework-resources-table',
  templateUrl: './framework-resources-table.component.html',
  styleUrls: ['./framework-resources-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkResourcesTableComponent {
  displayedColumns = ['name', 'numOfFailedControls', 'remediation', 'install'];
  dataSource!: MatTableDataSource<IFrameworkResource>;
  selectedResourceKind: string = 'all';
  resourceKindEnum = ResourceKindEnum;

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  @Input() set resources(items: IFrameworkResource[] | null) {
    if (items) {
      this.dataSource = new MatTableDataSource(items);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
      });
    }
  }

  @Output() changeResourceKind = new EventEmitter<string>();

  getResourceIcon(kind: string): string {
    return ResourceIconEnum[
      <ResourceKindEnum>ResourceKindEnum[<ResourceKindEnum>kind]
    ];
  }

  getResourceKindText(kind: string): string {
    if (Object.is(kind, 'all')) {
      return 'All Resources';
    }
    return ResourceKindEnum[<ResourceKindEnum>kind];
  }

  isResourceKindSelected(kind: string): boolean {
    return Object.is(this.selectedResourceKind, kind);
  }

  selectResourceKind(kind: string): void {
    this.selectedResourceKind = kind;
    this.changeResourceKind.emit(kind);
  }
}
