import { CommonModule } from '@angular/common';
import { Component, inject, NgModule, OnDestroy, OnInit } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { first, Observable, Subscription } from 'rxjs';
import { DefaultMeta } from 'src/app/consts/metas';
import { BlockUiModule } from 'src/app/ui/block/block-ui.module';
/**
 * Component
 */
@Component({
  selector: 'page-route',
  templateUrl: './page-route.template.html',
})
export class PageRoute implements OnInit, OnDestroy {
  subs$: Subscription = new Subscription();

  page$: Observable<any> = new Observable();
  firestore: Firestore = inject(Firestore);

  constructor(public activeRoute: ActivatedRoute, public meta: Meta) {}

  ngOnInit() {
    this.subs$.add(
      this.activeRoute.params.pipe().subscribe(({ page }) => {
        const firePath = `data/new-model-page/items/${page}`;
        const menuDoc = doc(this.firestore, firePath);
        this.page$ = docData(menuDoc);
      })
    );

    this.subs$.add(
      this.page$.pipe(first()).subscribe((page) => {
        const metas: typeof DefaultMeta = {
          ...DefaultMeta,
          description: page.subheading,
          'og:description': page.subheading,
        };
        this.meta.addTags(
          Object.keys(metas).map((key: string) => {
            return {
              name: key,
              content: metas[key],
            };
          })
        );
      })
    );
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
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
  imports: [CommonModule, RouterModule.forChild(routes), BlockUiModule],
  declarations: [PageRoute],
  exports: [PageRoute, RouterModule],
})
export class PageRouteModule {}
