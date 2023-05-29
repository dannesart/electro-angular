import { Component, inject, OnInit } from '@angular/core';
import {
  doc,
  Firestore,
  docData,
  getDocFromCache,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menu$: Observable<any>;
  menuPromise$: any;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const menuDoc = doc(this.firestore, '/data/new-model-menu/items/main');
    this.menu$ = docData(menuDoc);
  }
}
