import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'armo-visualizer-page',
  templateUrl: './visualizer-page.component.html',
  styleUrls: ['./visualizer-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizerPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
