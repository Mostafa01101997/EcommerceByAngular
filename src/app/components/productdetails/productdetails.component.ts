import { EcommerceproductsService } from './../../services/ecommerceproducts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute,
     private _productsService: EcommerceproductsService,
     private _CartServic:CartService,
     private _toastr:ToastrService
     ) { }
  productDetails: any = null;
  productId: string | null = '';
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
      },
      error: (err) => { }
    });

    this._productsService.getProductDetails(this.productId).subscribe({
      next: (response) => {
        this.productDetails = response.data

      },
      error: (err) => {

      }
    })


  }
  productImageOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['next', 'prev'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  };
  
  addProduct(proId:string):void{

    this._CartServic.addToCartItem(proId).subscribe({
      next:(response)=>{
        console.log(response);
        this._toastr.success(response.message);

        
      },
      error:(err)=>{
        console.log(err.erorr.message);
        
      }
    })
    
  }



}
