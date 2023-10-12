import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClien: HttpClient) { }

  userInfo: any;

  register(userData: Object): Observable<any> {
    return this._HttpClien.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userData
    )
  };

  login(userData: Object): Observable<any> {
    return this._HttpClien.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      userData
    )
  };
  userInfoToken(): void {
    const tokenCode = localStorage.getItem('_token');

    if (tokenCode !== null) {
      const tokenInfo = jwtDecode(tokenCode);
      this.userInfo = tokenInfo;
      console.log(tokenInfo);
      

    }

  };

  forgetPassword(userEmail: object): Observable<any> {
    return this._HttpClien.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      userEmail
    );
  };

  verfiyResetCode(code:object):Observable<any>{

    return this._HttpClien.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
    code
    );
  };
 
  resetNewPassword(pass:object):Observable<any>{

    return this._HttpClien.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
      pass
    );
  };

 changePassword(userPass:object):Observable<any>{

  return this._HttpClien.put(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
  userPass
  );
 };






}
