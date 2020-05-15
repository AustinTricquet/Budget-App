import { Component, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent {

  tab = "budget"

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);

    if(tabChangeEvent.index == 0) {
        //this.fabColor = this.fabOptions.budget.color;
        //this.fabIcon = this.fabOptions.budget.icon;
        this.tab = "budget"
      } else if (tabChangeEvent.index == 1) {
        //this.fabColor = this.fabOptions.calendar.color;
        //this.fabIcon = this.fabOptions.calendar.icon;
        this.tab = "calendar"
      } else if (tabChangeEvent.index == 2) {
        //this.fabColor = this.fabOptions.goals.color;
        //this.fabIcon = this.fabOptions.goals.icon;
        this.tab = "goals"
      } else {
        //this.fabColor = this.fabOptions.accounts.color;
        //this.fabIcon = this.fabOptions.accounts.icon;
        this.tab = "accounts"
      }

    
  }
}