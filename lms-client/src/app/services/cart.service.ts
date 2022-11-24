import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public baseUrl = environment.baseUrl;

  public userBaseUrl = environment.userBaseUrl

  // public cartItemList : any
  // public CourseList = new BehaviorSubject<any>([])

  constructor(
    private _http: HttpClient,
    private _router: Router

  ) { }

//   getCourses(){
//   return  this.CourseList.asObservable();
//   }

//   setCourse(course:any){
//     this.cartItemList.push(...course)
//     this.CourseList.next(course);
//   }

//   addtocart(course :any){
//     this.cartItemList.push(course);
//     this.CourseList.next(this.cartItemList);
//     this.getCoursePrice();

//   }
//   getCoursePrice(){
//     let grandTotal = 0;
//     this.cartItemList.map((a:any)=>{
//       grandTotal += a.total;
//     })
//   }

// removeCartItem(course:any){
//   this.cartItemList.map((a:any, index:any)=>{
//     if(course.id=== a.id){
//       this.cartItemList.splice(index,1);
//     }
//   })
// }

// removeAllCart(){
//   this.cartItemList =[]
//   this.CourseList.next(this.cartItemList);
// }

  addToCart(data: any) {
    return this._http.post<any>(`${this.userBaseUrl}add-to-cart`, data)
  }
  getItemsFromCart(data: any) {
    return this._http.post<any>(`${this.userBaseUrl}get-items-from-cart`, data)
  }
  getCourseDetails(data:any) {
  return this._http.post<any>(`${this.userBaseUrl}get-course-details`, data)

 }
 deleteFromCart(data: any) {
  return this._http.post<any>(`${this.userBaseUrl}delete-from-cart`, data)
 }
}


