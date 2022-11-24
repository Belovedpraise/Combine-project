import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
  reference = '';
  public title="";
  public message="";
  public email ="";
  public amount="";
  constructor() { }
  paymentInit() {
    console.log('Payment initialized');



  }

  paymentDone(ref: any) {
    this.amount=this.amount;
    this.email =this.amount;
    this.title = 'Payment successfull';
    console.log(this.title, ref);
    console.log(this.message)

  }

  paymentCancel() {
    console.log('payment failed');

  }

  ngOnInit(): void {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    console.log("i am getting it 1")
  }

}
