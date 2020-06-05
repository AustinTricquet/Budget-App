// Just found out that at the moment I do not need the router module for the 
 //main-feature module. But will keep just in case I need to re route the root '' to somehthing else later on.


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';


const routes: Routes = [
  { path: '', component:TabsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainFeatureRoutingModule { }