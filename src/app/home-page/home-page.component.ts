import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;



  close() {
    this.sidenav.close();
    console.log('This ran')
  }
  
  
  

}
