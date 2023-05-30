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
import { Observable } from 'rxjs';
/**
 * Component
 */
@Component({
  selector: 'ui-image',
  templateUrl: './image-ui.template.html',
})
export class ImageUi implements OnInit, OnDestroy {
  @Input('imageNode') imageNode: any;

  image$: Observable<any> = new Observable();
  firestore: Firestore = inject(Firestore);

  constructor() {}

  ngOnInit(): void {
    const firePath = `media/${this.imageNode}`;
    const imageDoc = doc(this.firestore, firePath);
    this.image$ = docData(imageDoc);
  }

  ngOnDestroy(): void {}
}

/**
 * Module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [ImageUi],
  exports: [ImageUi],
})
export class ImageUiModule {}
