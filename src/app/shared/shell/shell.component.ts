import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay} from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  close() {
    this.sidenav.close();
    console.log('This ran')
  }
  

  

}
