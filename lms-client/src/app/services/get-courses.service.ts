import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {
  public baseUrl = environment.baseUrl;

  public userBaseUrl = environment.userBaseUrl

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }


  getCoursesByCategory(data:any) {
    return this._http.post<any>(`${this.userBaseUrl}get-courses-by-category`, data)
  }

  getAllCourses(data:any) {
    return this._http.post(`${this.userBaseUrl}get-all-courses`, data)
  }
}
