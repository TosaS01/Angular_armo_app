import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UtilHttpModule } from "@armo/util-http";

import { CoreModule } from '@armo/core';
import { SharedModule } from '@armo/shared';
import { FiltersSharedUiModule } from '@armo/filters/shared-ui';

import { DashboardFeatureShellModule } from '@armo/dashboard/shell';
import { WorkloadsShellModule } from '@armo/workloads/shell';
import { PostureShellModule } from '@armo/posture/shell';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { FiltersDataAccessModule } from '@armo/filters/data-access';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UtilHttpModule,
    DashboardFeatureShellModule,
    WorkloadsShellModule,
    PostureShellModule,
    SharedModule,
    FiltersSharedUiModule,
    FiltersDataAccessModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '**',
          redirectTo: '/home'
        }
      ]
    ),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
