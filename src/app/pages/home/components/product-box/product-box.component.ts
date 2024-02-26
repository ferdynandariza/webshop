import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../../models/product.model";

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css'
})
export class ProductBoxComponent {

  @Input() fullWidthMode = false;
  /*product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price: 150,
    category: 'Shoes',
    description: 'Description',
    image: 'https://via.placeholder.com/150'
  };*/

  @Output() addToCart = new EventEmitter();
  @Input() product!: Product;
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
