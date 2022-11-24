import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public userBaseUrl = environment.userBaseUrl;

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  addPayment(data:any) {
    return this._http.post<any>(`${this.userBaseUrl}payment/stage-three`, data);
  }
}



