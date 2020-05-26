import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(public afAuth: AngularFireAuth) { }

  @ViewChild('sidenav') sidenav: MatSidenav;

  close() {
    this.sidenav.close();
    console.log('This ran')
  }
}
