import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  errorMessage: string = '';
  isLoding: boolean = false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^\w{6,}$/)]),
    rePassword: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{ validators:[this.confimPassword]} as FormControlOptions);

  //validation repassword....................gruop===registerform...
  confimPassword(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');
    if (rePassword?.value === '') {
      rePassword.setErrors({ required: true })
    } else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({ mismatch: true })
    };
  };



  handelForm(): void {
    this.isLoding = true;
    const userData = this.registerForm.value;
    console.log(userData);


    if (this.registerForm.valid == true) {

      this._AuthService.register(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.message === "success") {
            this._Router.navigate(['/login'])
            this.isLoding = false;

          }
        },
        error: (err) => {
          console.log(err.error.message);
          this.errorMessage = err.error.message;
          this.isLoding = false;
          // this.errorMessage = err.erorr.message;

        }
      })

    }
  }

}
