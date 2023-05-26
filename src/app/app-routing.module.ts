import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routes/home/home-route.module').then((m) => m.HomeRouteModule),
  },
  {
    path: ':page',
    loadChildren: () =>
      import('./routes/page/page-route.module').then((m) => m.PageRouteModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
