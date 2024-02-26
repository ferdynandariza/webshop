import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product.model";

const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4: 350}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string = '';
  products = [1,2,3,4,5,6,7,8,9,10]

  constructor(private cartService: CartService) {
  }

  onColumnsCountChanged(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
