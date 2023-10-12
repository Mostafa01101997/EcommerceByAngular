import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  success: boolean = false;
  errorStatus: boolean = false;
  codeSucsess: boolean = false;

  messageError: string = '';


  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

  });
  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required])

  });
  resetPasswordForm: FormGroup = new FormGroup({
    resetPass: new FormControl('', [Validators.required])

  });

  handelForget(): void {
    const email = this.forgetPasswordForm.value;
    console.log(email);
    if (this.forgetPasswordForm.valid) {
      this._AuthService.forgetPassword(email).subscribe({
        next: (response) => {
          console.log(response.message);
          this.success = true;
          this.errorStatus = false;


        },
        error: (err) => {
          this.messageError = err.error.message
          this.errorStatus = true;
          this.success = false;

        }
      })
    }

  };

  resetCode(): void {
    const inputCode = this.resetCodeForm.value;
    console.log(inputCode);

    this._AuthService.verfiyResetCode(inputCode).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status === "Success") {
          this.codeSucsess = true;
        }

      },
      error: (err) => {
        console.log(err.error.message);

      }
    })


  };

  resetPassword(): void {

    const inputPass ={
      email:this.forgetPasswordForm.value.email,
      newPassword:this.resetPasswordForm.value.resetPass
   
    } 
    console.log(inputPass);
    this._AuthService.resetNewPassword(inputPass).subscribe({
      next: (response) => {
        console.log(response.token);
        localStorage.setItem('_token', response.token);
        this._AuthService.userInfoToken()
        this._Router.navigate(['/home'])
      },
      error: (err) => {
        console.log(err.error.message);

      }
    })

  }

}
