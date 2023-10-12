import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceproductsService } from 'src/app/services/ecommerceproducts.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {

  brands: any;
  page: number = 1;
  constructor(
    private _Brands: EcommerceproductsService,
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._Brands.getBrands().subscribe({
      next: (response) => {
        this.brands = response.data;

      }
    })

  }
}
