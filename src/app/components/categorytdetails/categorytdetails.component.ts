import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceproductsService } from 'src/app/services/ecommerceproducts.service';

@Component({
  selector: 'app-categorytdetails',
  templateUrl: './categorytdetails.component.html',
  styleUrls: ['./categorytdetails.component.scss']
})
export class CategorytdetailsComponent implements OnInit {
  categoryId: any;
  categoryDetails: any;
  constructor(
    private _category: EcommerceproductsService,
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.categoryId = params.get('id');
      },
      error: (err) => { }
    });
    this._category.getCategoriesDetails(this.categoryId).subscribe({
      next: (response) => {
        this.categoryDetails = response.data;
        console.log(this.categoryDetails);
        
      },
      error:(err)=>{
        console.log(err.error.message);
        
      }
    })
  }
}
