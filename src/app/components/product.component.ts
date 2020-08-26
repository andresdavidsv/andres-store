import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { Product } from '../product.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnChanges, OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
