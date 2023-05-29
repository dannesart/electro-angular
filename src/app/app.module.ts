import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MenuUiModule } from './ui/menu/menu-ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MenuUiModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDP4u0xemmWPG-cAfzy5SXI2gk-9a0VMrg',
        authDomain: 'eaglecms-55a84.firebaseapp.com',
        databaseURL: 'https://eaglecms-55a84.firebaseio.com',
        projectId: 'eaglecms-55a84',
        storageBucket: 'eaglecms-55a84.appspot.com',
        messagingSenderId: '413530424879',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
