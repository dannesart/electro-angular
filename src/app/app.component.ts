import { Component, inject } from '@angular/core';
import {
  collection,
  doc,
  collectionData,
  Firestore,
  docData,
} from '@angular/fire/firestore';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { DefaultMeta } from './consts/metas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menu$: Observable<any>;
  firestore: Firestore = inject(Firestore);

  constructor(public metaTagService: Meta) {
    const menuDoc = doc(this.firestore, '/data/new-model-menu/items/main');
    this.menu$ = docData(menuDoc);

    metaTagService.addTags(
      Object.keys(DefaultMeta).map((key: string, idx) => {
        return {
          name: key,
          content: DefaultMeta[key],
        };
      })
    );
  }
}
