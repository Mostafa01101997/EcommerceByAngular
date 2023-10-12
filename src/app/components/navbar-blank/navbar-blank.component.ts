import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent implements OnInit {
  constructor(
    private _Router: Router,
    private _CartService: CartService,
    private _WishlistService: WishlistService
  ) { }
  cartNum: number = 0
  wishNum: number = 0
  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next: (data) => {  //data====value of cart change
        this.cartNum = data;
      },
    });
    this._CartService.getCartUser().subscribe({
      next: (response) => {
        this.cartNum = response.numOfCartItems;
      }
    });

    this._WishlistService.wishNum.subscribe({
      next: (data) => {
        this.wishNum = data;
      }
    });
    this._WishlistService.getWishList().subscribe({
      next: (response) => {
        this.wishNum = response.count;
      }
    })

  };




  signOut(): void {
    localStorage.removeItem('_token');
    this._Router.navigate(['/login']);
  }
}
