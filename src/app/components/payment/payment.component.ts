import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute, private _CartService: CartService) { }

  carId: any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({  //get id from url
      next: (parms) => {
        this.carId = parms.get('id');

      }
    })


  }

  orderForm: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl('')

  });

  handelForm(): void {
    const cartId: string = this.carId;
    const orderInfo: any = this.orderForm.value;

    this._CartService.paymentMethod(cartId,orderInfo).subscribe({
      next:(response)=>{
        window.open(response.session.url,'_self');
      },
      error:(err)=>{
        console.log(err.erorr.message);
        
      }
    })
    


  }

}
