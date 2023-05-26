import { Component, Input } from '@angular/core';
import { Menu } from './model';

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input('menu') menu: Menu[] = [];
}
