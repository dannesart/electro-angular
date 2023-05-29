import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Menu } from './model';

@Component({
  selector: 'ui-menu',
  templateUrl: './menu-ui.template.html',
})
export class MenuUi {
  @Input('menu') menu: Menu[] = [];

  public cleanUrl = (url: string) => {
    return url.startsWith('page/') ? url.replace('page/', '/') : url;
  };
}

@NgModule({
  declarations: [MenuUi],
  imports: [CommonModule, RouterModule],
  exports: [MenuUi],
})
export class MenuUiModule {}
