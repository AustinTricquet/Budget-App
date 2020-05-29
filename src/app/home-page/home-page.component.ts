import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private viewportScroller : ViewportScroller) {}

  public onClick(elementId: string): void {
    this.close()
    this.viewportScroller.scrollToAnchor('homeAbout');
    console.log('onclick ran!')
  }

  close() {
    this.sidenav.close();
    console.log('This ran')
  }
  
  
  

}
