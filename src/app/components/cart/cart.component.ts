import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService, private _Renderer2: Renderer2) { }
  cartDetails: any = null;
  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next: (response) => {  //distructing data 
        this.cartDetails = response.data
      },
      error: (err) => {
        console.log(err.error.message);

      }

    })

  };

  removeProduct(id: string): void {
    this._CartService.removeCartItem(id).subscribe({
      next: (response) => {
        this.cartDetails = response.data
        // console.log(data);
        this._CartService.cartNumber.next(response.numOfCartItems)
      },
      error: (err) => {
        console.log(err.erorr.message);

      }
    })
  };

  changeCount(id: string, count: number, el1: HTMLButtonElement, el2: HTMLButtonElement): void {
    if (count >= 1) {
      this._Renderer2.setAttribute(el1, 'disabled', 'true');
      this._Renderer2.setAttribute(el2, 'disabled', 'true');

      this._CartService.updataCartProductCouvt(id, count).subscribe({
        next: (response) => {
          this.cartDetails = response.data
          console.log(response.data);
          this._Renderer2.removeAttribute(el1, 'disabled');
          this._Renderer2.removeAttribute(el2, 'disabled');
        },
        error: (err) => {
          this._Renderer2.removeAttribute(el1, 'disabled');
          this._Renderer2.removeAttribute(el2, 'disabled');
          console.log(err.erorr.message);

        }
      })
    };
  };

  clearCart(): void {
    this._CartService.clearCartItem().subscribe({
      next: (response) => {
        console.log(response);
        console.log(this.cartDetails);
        
        if (response.message === "success") {
          this.cartDetails = null;
          this._CartService.cartNumber.next(0)
        }

      },
      error: (err) => {
        console.log(err.erorr.message);

      }
    })
  }


}


