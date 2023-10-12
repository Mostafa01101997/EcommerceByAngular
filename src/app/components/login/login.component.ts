import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  errorMessage: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  });

  handelForm(): void {
    const userData = this.loginForm.value;
    console.log(userData);


    if (this.loginForm.valid == true) {

      this._AuthService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.message === "success") {
            localStorage.setItem('_token', response.token);
            this._AuthService.userInfoToken()
            this._Router.navigate(['/home'])
          

          }
        },
        error: (err) => {
          console.log(err.error.message);
          this.errorMessage = err.error.message;
        
          // this.errorMessage = err.erorr.message;

        }
      })

    }
  }

}
