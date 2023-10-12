import { Component, OnInit, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { EcommerceproductsService } from 'src/app/services/ecommerceproducts.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productData: any[] = [];
  termInput: string = '';
  wishListData: any[] = [];
  totalLength: any;
  page: number = 1;
  constructor(
    private _productsService: EcommerceproductsService,
    private _CartServic: CartService,
    private _toastr: ToastrService,
    private _WishlistService: WishlistService,
    private _Renderer2: Renderer2

  ) { }
  ngOnInit(): void {
    this._productsService.getProducts().subscribe({
      next: (response) => {
        this.productData = response.data;
        this.totalLength = response.data.length;

      },
      error: (err) => {
        console.log(err.error.message);
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
    });

   

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
