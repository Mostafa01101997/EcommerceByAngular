import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishDetails: any = null;
  termInput: string = '';
  wishListData: any[] = [];
  constructor(
    private _WishlistService: WishlistService,
    private _toastr: ToastrService,
    private _CartServic: CartService
  ) { }
  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next: (response) => {
        this.wishDetails = response.data;
        this.wishListData = response.data.map((item: any) => item._id)
        this._WishlistService.wishNum.next(response.data.length)
      },
      error: (err) => {
        console.log(err.error.message);
      }
    })
  };


  removeProductWish(proId: string | undefined): void {
    this._WishlistService.removeWishlistItem(proId).subscribe({
      next: (response) => {
        this.wishListData = response.data;
        this._toastr.success(response.message);
        const newdata = this.wishDetails.filter((item: any) => this.wishListData.includes((item._id)))
        this.wishDetails = newdata;
        this._WishlistService.wishNum.next(response.data.length);

      },
      error: (err) => {
        console.log(err.error.message)
      }

    })

  }

  addProductToCart(proId: string): void {
    this._CartServic.addToCartItem(proId).subscribe({
      next: (response) => {
        console.log(response);
        this._toastr.success(response.message);
        this._CartServic.cartNumber.next(response.numOfCartItems)
      },
      error: (err) => {
        console.log(err.erorr.message);
      }
    })

  }


}
