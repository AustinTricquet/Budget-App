import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShellComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver) {}

  

}
