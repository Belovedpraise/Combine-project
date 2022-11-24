import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCoursesService } from 'src/app/services/get-courses.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  public name:any
  public category:any;
  public errorMessageStatus = false
  public errorMessage = ''

  public messageStatus = false;
  public message = ''
  public courses = []

  constructor(public actRoute: ActivatedRoute, private _getCourse: GetCoursesService) {
    this.name = this.actRoute.snapshot.params['name'];
  }

  ngOnInit(): void {

    this._getCourse.getCoursesByCategory({name: this.name}).subscribe((res: any)=> {
      // console.log("Success")
      if(res.status == false) {
        this.errorMessageStatus = true;
        this.errorMessage = res.message

        this.messageStatus = true;
        this.message = res.message;
      }else {
        this.courses = res.courses;
        // console.log(res)
      }
    },
    err=>(console.log(err)))
  }

  addToCart(item:any) {
    console.log(item);

  }

}
