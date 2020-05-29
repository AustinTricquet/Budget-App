import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { TabsComponent } from './main-feature/tabs/tabs.component';
import { MainFeatureModule } from './main-feature/main-feature.module';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: 'budget', component: TabsComponent }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
  
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions),
           MainFeatureModule, RouterModule, BrowserModule
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
