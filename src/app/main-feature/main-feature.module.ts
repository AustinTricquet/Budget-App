import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabComponent } from './tabs/fab/fab.component';
import { TabsComponent } from './tabs/tabs.component';
import { SharedModule } from '../shared/shared.module';
import { BudgetModule } from './tabs/budget/budget.module';


@NgModule({
  declarations: [TabsComponent, FabComponent],
  imports: [
    CommonModule,
    SharedModule,
    BudgetModule,
  ],
  exports: [
    TabsComponent,
    SharedModule,
  ]
})
export class MainFeatureModule { }
