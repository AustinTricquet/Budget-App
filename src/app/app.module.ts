import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetCategoryComponent } from './budget-category/budget-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCardModule, MatButtonToggleModule } from '@angular/material';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { SumDetailToggleComponent } from './sum-detail-toggle/sum-detail-toggle.component';
import { WeekMonthToggleComponent } from './week-month-toggle/week-month-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    BudgetCategoryComponent,
    BudgetPageComponent,
    SumDetailToggleComponent,
    WeekMonthToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
