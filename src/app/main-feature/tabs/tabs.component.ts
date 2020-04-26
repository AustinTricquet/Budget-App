import { Component, Input} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Input() fabOptions;
  @Input() fabColor;
  @Input() fabIcon;

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);

    if(tabChangeEvent.index == 0) {
      this.fabColor = this.fabOptions.budget.color;
      this.fabIcon = this.fabOptions.budget.icon;
    } else if (tabChangeEvent.index == 1) {
      this.fabColor = this.fabOptions.calendar.color;
      this.fabIcon = this.fabOptions.calendar.icon;
    } else if (tabChangeEvent.index == 2) {
      this.fabColor = this.fabOptions.goals.color;
      this.fabIcon = this.fabOptions.goals.icon;
    } else {
      this.fabColor = this.fabOptions.accounts.color;
      this.fabIcon = this.fabOptions.accounts.icon;
    }
  }
}