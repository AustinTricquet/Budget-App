import { Component, OnInit } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animations';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  animations: speedDialFabAnimations,
})
export class FabComponent implements OnInit {

  receiveSelectedTab($event) {

  }

  constructor() { }

  ngOnInit() {
  }

  fabOptions = {
    budget: {
      color: "orange",
      icon: "edit",
      speedDial: [
        {
          icon: 'edit',
          name: 'Edit'
        },
        {
          icon: 'attach_money',
          name: 'Budgets'
        }
      ],
      buttons: [],
      fabTogglerState: 'inactive'
    },
    calendar: {
      color: "red",
      icon: "add"
    },
    goals: {
      color: "blue",
      icon: "add"
    },
    accounts: {
      color: "green",
      icon: "add"
    }
  }

  fabColor = this.fabOptions.budget.color;
  fabIcon = this.fabOptions.budget.icon;

  showItems() {
    this.fabOptions.budget.fabTogglerState = 'active';
    this.fabOptions.budget.buttons = this.fabOptions.budget.speedDial;
  }

  hideItems() {
    this.fabOptions.budget.fabTogglerState = 'inactive';
    this.fabOptions.budget.buttons = [];
  }

  onToggleFab() {
    this.fabOptions.budget.buttons.length ? this.hideItems() : this.showItems();
  }


  

}
