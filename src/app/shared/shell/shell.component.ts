import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Observable, ArgumentOutOfRangeError } from 'rxjs';
import { map, shareReplay} from 'rxjs/operators';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShellComponent {

  fabOptions = {
    budget: {
      color: "orange",
      icon: "edit"
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


  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver) {}

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
