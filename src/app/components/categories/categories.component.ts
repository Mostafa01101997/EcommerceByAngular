import { Component, OnInit } from '@angular/core';
import { EcommerceproductsService } from 'src/app/services/ecommerceproducts.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  page: number = 1;
  constructor(
    private _category: EcommerceproductsService
  ) { }
  ngOnInit(): void {
    this._category.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data;

      }
    })

  }


}
