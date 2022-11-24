import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddResourcesService {
  public userBaseUrl = environment.userBaseUrl;

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  addResources(data:any) {
    return this._http.post<any>(`${this.userBaseUrl}resources/stage-two`, data);
  }

  getCourseResources(data:any) {
    return this._http.post<any>(`${this.userBaseUrl}get-course-resources`, data);
  }
}
