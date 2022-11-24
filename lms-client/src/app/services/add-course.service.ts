import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {

  public userBaseUrl = environment.userBaseUrl;
  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

   // FUNTION FOR ADDING COURSES
   addCourse(data:any) {
    return this._http.post<any>(`${this.userBaseUrl}courses/stage-one`, data);
  }
  getMyCourses(data: any) {
    return this._http.post<any>(`${this.userBaseUrl}view-my-courses`, data)
  }
  getCoursesByCategory(data: any) {
    return this._http.post<any>(`${this.userBaseUrl}getCoursesByCategory`, data)
  }
}
