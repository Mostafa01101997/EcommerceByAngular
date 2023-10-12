import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceproductsService {

  constructor(private _HttpClient: HttpClient) { }

  getProducts(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products');
  }
  getProductDetails(prodId:string|null):Observable<any>{

    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${prodId}`)
  }



  getCategories(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }
  getCategoriesDetails(catId:string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${catId}`);
  }



  getBrands(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }
  getBrandsDetails(bId:string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${bId}`);
  }


}
