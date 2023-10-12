import { Category } from 'src/app/interface/category';
import { EcommerceproductsService } from './../../services/ecommerceproducts.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private _productsService: EcommerceproductsService,
    private _CartServic: CartService,
    private _toastr: ToastrService,
    private _WishlistService: WishlistService,
    private _Renderer2: Renderer2
  ) { }

  productData: any[] = [];
  categoryData: Category[] = [];
  termInput: string = '';
  wishListData: any[] = [];
  totalLength:any;
  page:number=1;

  ngOnInit(): void {
    this._productsService.getProducts().subscribe({
      next: (response) => {
        this.productData = response.data;        
        this.totalLength=response.data.length;
        
      },
      error: (err) => {
        console.log(err.error.message);
      }
    });
    this._productsService.getCategories().subscribe({
      next: (resonse) => {
        this.categoryData = resonse.data;

      },
      error: (err) => {
        console.log(err.erorr.message);

      }
    });
    this._WishlistService.getWishList().subscribe({
      next: (response) => {
        this.wishListData = response.data.map((item: any) => item._id)
      },
      error: (err) => {
        console.log(err.error.message);

      }
    })


  };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['next', 'prev'],
    responsive: {
      0: {
        items: 2
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
  }
  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['next', 'prev'],
    items: 1,
    nav: false
  }

  addProduct(proId: string): void {

    this._CartServic.addToCartItem(proId).subscribe({
      next: (response) => {
        // console.log(response);
        this._toastr.success(response.message);
        this._CartServic.cartNumber.next(response.numOfCartItems)


      },
      error: (err) => {
        console.log(err.erorr.message);

      }
    })

  };

  addProductToWishList(proId: string | undefined): void {
    this._WishlistService.addToWishList(proId).subscribe({
      next: (response) => {
        this.wishListData = response.data;
        console.log(this.wishListData);
        this._toastr.success(response.message);
        this._WishlistService.wishNum.next(response.data.length)
        // this._Renderer2.setStyle(icon,'background-color','red')

      },
      error: (err) => {
        console.log(err.error.message);

      }
    })

  };
  removeProductWish(proId: string | undefined): void {
    debugger
    this._WishlistService.removeWishlistItem(proId).subscribe({
      next: (response) => {
        console.log(response);

        this.wishListData = response.data;
        this._WishlistService.wishNum.next(response.data.length)
        this._toastr.success(response.message)
      },
      error: (err) => {
        console.log(err.error.message)
      }

    })

  }




}
