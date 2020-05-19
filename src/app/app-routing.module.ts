import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './main-feature/tabs/tabs.component';
import { MainFeatureModule } from './main-feature/main-feature.module';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: 'budget', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled'}),
      MainFeatureModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
