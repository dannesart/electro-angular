import { CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { first, Observable } from 'rxjs';
/**
 * Component
 */
@Component({
  selector: 'page-route',
  templateUrl: './page-route.template.html',
})
export class PageRoute {
  params$: Observable<any>;

  page$: Observable<any> = new Observable();
  firestore: Firestore = inject(Firestore);

  constructor(public activeRoute: ActivatedRoute) {
    this.params$ = activeRoute.params;
    this.params$.pipe(first()).subscribe(({ page }) => {
      const firePath = `data/new-model-page/items/${page}`;
      const menuDoc = doc(this.firestore, firePath);
      this.page$ = docData(menuDoc);
    });
  }
}

/**
 * Route
 */
const routes: Routes = [
  {
    path: '',
    component: PageRoute,
  },
];

/**
 * Module
 */
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PageRoute],
  exports: [PageRoute, RouterModule],
})
export class PageRouteModule {}
