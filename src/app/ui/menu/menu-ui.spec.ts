import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUi } from './menu-ui.module';

describe('MenuComponent', () => {
  let component: MenuUi;
  let fixture: ComponentFixture<MenuUi>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuUi],
    });
    fixture = TestBed.createComponent(MenuUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
