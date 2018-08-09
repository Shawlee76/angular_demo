import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const config = {
      apiKey: 'AIzaSyAhj2Om4_VL0cNjZZ-u8nEhmzPiXGhxzdw',
      authDomain: 'mon-projet-v2-fb.firebaseapp.com',
      databaseURL: 'https://mon-projet-v2-fb.firebaseio.com',
      projectId: 'mon-projet-v2-fb',
      storageBucket: 'mon-projet-v2-fb.appspot.com',
      messagingSenderId: '193231355177'
    };
    firebase.initializeApp(config);
  }
}
