import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceproductsService } from 'src/app/services/ecommerceproducts.service';

@Component({
  selector: 'app-brandsdetails',
  templateUrl: './brandsdetails.component.html',
  styleUrls: ['./brandsdetails.component.scss']
})
export class BrandsdetailsComponent implements OnInit {
  brandId: any;
  brandDetails: any;
  constructor(
    private _Brand: EcommerceproductsService,
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.brandId = params.get('id');
      },
      error: (err) => { }
    });
    this._Brand.getBrandsDetails(this.brandId).subscribe({
      next: (response) => {
        this.brandDetails = response.data;
        console.log(this.brandDetails);
        
      },
      error:(err)=>{
        console.log(err.error.message);
        
      }
    })
  }
}
