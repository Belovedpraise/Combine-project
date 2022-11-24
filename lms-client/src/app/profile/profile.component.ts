import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth/auth.service';
import { GetCoursesService } from '../services/get-courses.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user ={}
  public allCourses = []
  public loading: boolean = false;
  constructor(private _authService:AuthService, private _getCourse:GetCoursesService) { }


  ngOnInit(): void {
    this.loading = true
    this._authService.getSignedInUser({}).subscribe((res: any)=> {
      if(res.status == true) {
        this.user = res.user;
      }else {
        alert(res.message);
      }
    })
  }

}
