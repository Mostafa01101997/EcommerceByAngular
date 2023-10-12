import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient) { }

  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);    /////shared all components

  addToCartItem(_productId: string): Observable<any> {

    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: _productId
      }

    )
  };

  getCartUser(): Observable<any> {

    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`)
  };

  removeCartItem(_prodId: string): Observable<any> {

    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${_prodId}`)
  };


  clearCartItem(): Observable<any> {

    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`)
  };

  updataCartProductCouvt(_proId: string, counNum: number): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${_proId}`,
      {
        count: counNum
      })
  };

  paymentMethod(cartId: string, orderInfo: object): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: orderInfo
      }
    )
  };



}
