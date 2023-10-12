import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changepassowrd',
  templateUrl: './changepassowrd.component.html',
  styleUrls: ['./changepassowrd.component.scss']
})
export class ChangepassowrdComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  erorrMessage: boolean = false;

  changePasswordForm: FormGroup = new FormGroup({
    currentPassword: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl('')

  }, { validators: [this.confimPassword] } as FormControlOptions);
  confimPassword(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');
    if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({ mismatch: true })
    };
  };


  changePassword(): void {
    const inputCode = this.changePasswordForm.value
    console.log(inputCode);
    this._AuthService.changePassword(inputCode).subscribe({
      next: (response) => {
        console.log(response);
        if (response.message === "success") {
          localStorage.setItem('_token', response.token);
          this._AuthService.userInfoToken()
          this._Router.navigate(['/home'])

        }

      },
      error: (err) => {
        this.erorrMessage = true
        console.log(err.error.message);

      }
    })




  }
}
