import { Component, inject } from '@angular/core';
import {
  collection,
  doc,
  collectionData,
  Firestore,
  docData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'electro';
  users$: Observable<any[]>;
  menu$: Observable<any>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const menuDoc = doc(this.firestore, '/data/new-model-menu/items/main');
    const usersCollection = collection(this.firestore, 'users');
    this.menu$ = docData(menuDoc);
    this.users$ = collectionData(usersCollection);
  }
}
