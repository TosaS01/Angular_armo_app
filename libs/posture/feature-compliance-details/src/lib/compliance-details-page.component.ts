import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FiltersFacade } from '@armo/filters/data-access';
import {
  PostureFacade,
  FrameworkScanScoresFacade,
  ScanSummaryFacade,
  FrameworkControlsFacade,
  FrameworkResourcesFacade,
  ClustersOvertimeFacade,
} from '@armo/posture/data-access';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'armo-compliance-details-page',
  templateUrl: './compliance-details-page.component.html',
  styleUrls: ['./compliance-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplianceDetailsPageComponent implements OnInit, OnDestroy {
  #destroyed = new Subject();
  #selectedFramework!: string;

  clusterName!: string;

  constructor(
    private route: ActivatedRoute,
    public postureFacade: PostureFacade,
    public frameworkScanScoresFacade: FrameworkScanScoresFacade,
    public scanSummaryFacade: ScanSummaryFacade,
    public frameworkControlsFacade: FrameworkControlsFacade,
    public frameworkResourcesFacade: FrameworkResourcesFacade,
    public clustersOvertimeFacade: ClustersOvertimeFacade
  ) {}

  private _loadData(): void {
    this.clusterName = this.route.snapshot.params.clusterName;
    this.frameworkScanScoresFacade.fetchScanScores();
    this.postureFacade.fetchFrameworkList();
    this.scanSummaryFacade.fetchSummary();
    this.clustersOvertimeFacade.fetchClusterOvertime(this.clusterName);
  }

  runScan(): void {
    console.log('run scan');
  }

  onSelectFramework(frameworkName: string): void {
    this.#selectedFramework = frameworkName;
    this.frameworkControlsFacade.fetchControls(frameworkName);
    this.frameworkResourcesFacade.fetchResources(frameworkName);
  }

  onChangeResourceKind(kind: string): void {
    if (Object.is(kind, 'all')) {
      this.frameworkResourcesFacade.fetchResources(this.#selectedFramework);
    } else {
      this.frameworkResourcesFacade.fetchResources(this.#selectedFramework, kind);
    }
  }

  ngOnInit(): void {
    this._loadData();
  }

  ngOnDestroy(): void {
    this.#destroyed.next();
    this.#destroyed.complete();
  }
}
