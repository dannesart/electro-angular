import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  Input,
  NgModule,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { BehaviorSubject, first, Observable } from 'rxjs';
import { ImageUiModule } from '../image/image-ui.module';
/**
 * Component
 */
@Component({
  selector: 'ui-block',
  templateUrl: './block-ui.template.html',
})
export class BlockUi implements OnInit, OnDestroy {
  @Input('block') blockNode: any;

  block$: Observable<any> = new Observable();
  firestore: Firestore = inject(Firestore);

  constructor() {}

  ngOnInit(): void {
    const firePath = `data/${this.blockNode.id}/items/${this.blockNode.value}`;
    const menuDoc = doc(this.firestore, firePath);
    this.block$ = docData(menuDoc);
  }

  ngOnDestroy(): void {}
}

/**
 * Module
 */
@NgModule({
  imports: [CommonModule, ImageUiModule],
  declarations: [BlockUi],
  exports: [BlockUi],
})
export class BlockUiModule {}
