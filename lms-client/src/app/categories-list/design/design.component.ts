import { Component, OnInit } from '@angular/core';
import { AddCourseService } from 'src/app/services/add-course.service';
import { GetCoursesService } from 'src/app/services/get-courses.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  public name = 'Design'
  public courses = []

  constructor(
    private _addCourse: AddCourseService,
    private _getCourse: GetCoursesService
  ) { }

  ngOnInit(): void {
    this._getCourse.getCoursesByCategory({name: this.name}).subscribe((res: any)=> {
      console.log("Success")
    },
    err=>(console.log(err)))

}
}
