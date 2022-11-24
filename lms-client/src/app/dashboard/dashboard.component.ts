import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 }
      ];
    })
  );

  mainCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {title: 'Courses', content: '$21,000', icon: 'shop', cols: 4, rows: 1},
          {title: 'Lectires', content: '$31,000', icon: 'dashboard', cols: 4, rows: 1},
          {title: 'History', content: '$51,000', icon: 'phone_box', cols: 4, rows: 1},
          {title: 'Timetable', content: '$111,000', icon: 'more_vert', cols: 4, rows: 1}
        ]
      }

      return [
        {title: 'Current Month', content: '$21,000', icon: 'shop', cols: 1, rows: 1},
        {title: 'Lifetime', content: '$31,000', icon: 'dashboard', cols: 1, rows: 1},
        {title: 'History',  content: '$51,000', icon: 'phone_box', cols: 1, rows: 1},
        {title: 'Timetable', content: '$111,000', icon: 'more_vert', cols: 1, rows: 1}
      ]
    })
  );

  // transactionHistory = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Transaction history', cols: 2, rows: 1 }
  //     ];
  //   })
  // )
  public user = {}

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _authService: AuthService,
    private _router: Router
    ) {}

  ngOnInit(): void {
    this._authService.getSignedInUser({}).subscribe((res: any)=> {
      if(res.status == true) {
        this.user = res.user;
        console.log(this.user)
      }else {
        this._router.navigate(['/login']);
      }
    })
  }
}
