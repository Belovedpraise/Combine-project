import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EditCourseService {
  public userBaseUrl = environment.userBaseUrl
  constructor(
    public _httpClient: HttpClient
  ) { }

  editCourse(data:any) {
    return this._httpClient.post<any>(`${this.userBaseUrl}edit-course-details`, data)
  }
  editResource(data:any) {
    return this._httpClient.post<any>(`${this.userBaseUrl}edit-resource-details`, data)
  }
  editPrice(data:any) {
    return this._httpClient.post<any>(`${this.userBaseUrl}edit-course-price`, data)
    
  }
}
