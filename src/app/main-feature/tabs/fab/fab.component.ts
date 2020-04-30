import { Component, OnInit, Input } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animations';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  animations: speedDialFabAnimations,
})
export class FabComponent {

  @Input() tab;





  //receiveSelectedTab($event) {
    //
  //}

  fabOptions = {
    budget: {
      color: "orange",
      icon: "add",
      speedDial: [
        {
          icon: 'edit',
          name: 'Edit',
        },
        {
          icon: 'attach_money',
          name: 'Budgets',
        }
      ],
      buttons: [],
      fabTogglerState: 'inactive',
    },
    calendar: {
      color: "red",
      icon: "add",
      speedDial: [
        {
          icon: 'add',
          name: 'Edit',
        },
      ],
      buttons: [],
      fabTogglerState: 'inactive'
    },
    goals: {
      color: "blue",
      icon: "add",
      speedDial: [],
      buttons: [],
      fabTogglerState: 'inactive'
    },
    accounts: {
      color: "green",
      icon: "add",
      speedDial: [],
      buttons: [],
      fabTogglerState: 'inactive'
    }
  }

  fabColor = this.fabOptions.budget.color;
  fabIcon = this.fabOptions.budget.icon;

  showItems(tab) {
    this.fabOptions[tab].fabTogglerState = 'active';
    this.fabOptions[tab].buttons = this.fabOptions[tab].speedDial;
  }

  hideItems(tab) {
    this.fabOptions[tab].fabTogglerState = 'inactive';
    this.fabOptions[tab].buttons = [];
  }

  onToggleFab(tab) {
    console.log(tab);
    console.log(this.fabOptions[tab]);
    this.fabOptions[tab].buttons.length ? this.hideItems(this.tab) : this.showItems(this.tab);
  }

  speedDial(button) {
    console.log(button);
    if(button === "Edit") {

    }
  }

  

}
