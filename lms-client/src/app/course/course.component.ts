import { Component, OnInit } from '@angular/core';
import { GetCoursesService } from '../services/get-courses.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public errorMessageStatus = false
  public errorMessage = ''

  public messageStatus = false;
  public message = ''
  public allCourses = []

  constructor(
    private _getCourses: GetCoursesService,
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this._getCourses.getAllCourses({}).subscribe((res:any)=>{
      if(res.status == false) {
        this.errorMessageStatus = true;
        this.errorMessage = res.message

        this.messageStatus = true;
        this.message = res.message;
      }else {
        let allCourses = res.allCourses;
        this.allCourses = allCourses.slice(-9, -1)
      }
    },
    err=>(console.log(err))
    )
  }

  addToCart(course: any) {
    const courseObj = {name: "Janet"}
    this._cartService.addToCart(course).subscribe((res:any)=> {

    },
    err=>(console.log(err))
    )
  }

}
