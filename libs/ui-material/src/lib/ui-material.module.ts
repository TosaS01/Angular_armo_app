import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

const matModules = [
  FormsModule,  
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatIconModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatTabsModule,
  MatChipsModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatTreeModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatCardModule,
  MatSortModule,
  MatSlideToggleModule
];

@NgModule({
  imports: [
    CommonModule,
    ...matModules
  ],
  exports: [
    ...matModules,
  ],
})
export class UiMaterialModule {}
