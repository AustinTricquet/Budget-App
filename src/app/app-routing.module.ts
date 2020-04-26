import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './main-feature/tabs/tabs.component';
import { MainFeatureModule } from './main-feature/main-feature.module';

const routes: Routes = [
  { path: '', component: TabsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled'}),
      MainFeatureModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
