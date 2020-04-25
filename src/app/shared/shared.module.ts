import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatButtonToggleModule, MatTabsModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { BudgetPageComponent } from '../budget-page/budget-page.component';
import { SumDetailToggleComponent } from '../sum-detail-toggle/sum-detail-toggle.component';
import { WeekMonthToggleComponent } from '../week-month-toggle/week-month-toggle.component';
import { BudgetCategoryComponent } from '../budget-category/budget-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

@NgModule({
  declarations: [ShellComponent, BudgetPageComponent, SumDetailToggleComponent, WeekMonthToggleComponent, BudgetCategoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatTooltipModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    ShellComponent,
    MatTooltipModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
