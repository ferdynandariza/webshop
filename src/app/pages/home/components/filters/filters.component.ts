import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {

  @Output() showCategory = new EventEmitter<string>();

  categories: string[] = ['shoes', 'sports'];

  onShowCategory(categoryName: string): void{
    this.showCategory.emit(categoryName)
  }
}
