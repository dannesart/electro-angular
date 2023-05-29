import { CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { first, Observable } from 'rxjs';
import { BlockUiModule } from 'src/app/ui/block/block-ui.module';
/**
 * Component
 */
@Component({
  selector: 'home-route',
  templateUrl: './home-route.template.html',
})
export class HomeRoute {
  params$: Observable<any>;

  page$: Observable<any> = new Observable();
  firestore: Firestore = inject(Firestore);

  constructor(public activeRoute: ActivatedRoute) {
    this.params$ = activeRoute.params;
    this.params$.pipe(first()).subscribe(({ page }) => {
      const firePath = `data/new-model-page/items/D1t2qU9xKVLlXRqywYIm`;
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
    component: HomeRoute,
  },
];

/**
 * Module
 */
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), BlockUiModule],
  declarations: [HomeRoute],
  exports: [HomeRoute, RouterModule],
})
export class HomeRouteModule {}
