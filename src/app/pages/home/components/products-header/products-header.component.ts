import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {

  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemShowCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = 'desc'
  itemShowCount = 10;

  onSortUpdated(newSort:string): void{
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemUpdated(count:number): void{
    this.itemShowCount = count;
    this.itemShowCountChange.emit(count);
  }

  onColumnsUpdated(colNum:  number): void{
    this.columnsCountChange.emit(colNum)
  }
}
