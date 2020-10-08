import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private firebaseConfig: object;

  constructor() {
    this.firebaseConfig = {
      apiKey: 'AIzaSyBfsC2lmR1NwwJm87SNuGH2blPIejFGzfw',
      authDomain: 'pathfinder-web.firebaseapp.com',
      databaseURL: 'https://pathfinder-web.firebaseio.com',
      projectId: 'pathfinder-web',
      storageBucket: 'pathfinder-web.appspot.com',
      messagingSenderId: '414992955772',
      appId: '1:414992955772:web:75657e7e831f5348288cf9',
      measurementId: 'G-DFW9K8DV43'
    };
    // Initialize Firebase
    firebase.initializeApp(this.firebaseConfig);
    firebase.analytics();
  }
}
