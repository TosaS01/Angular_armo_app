import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryPageComponent } from './inventory-page.component';
import { Route, RouterModule } from '@angular/router';

export const armoWorkloadsFeatureInventoryRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: InventoryPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(armoWorkloadsFeatureInventoryRoutes)
  ],
  declarations: [
    InventoryPageComponent
  ],
})
export class WorkloadsFeatureInventoryModule {}
