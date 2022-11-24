import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
public currentPassword ="";
public newPassword = "";
public ConfirmPassword = "";
public setAll:any [];

  constructor() { }

  ngOnInit(): void {
  }

  changePassword(){
    let setAll = {currentPassword:this.currentPassword,newPassword:this.newPassword,ConfirmPassword:this.ConfirmPassword}
    this.setAll;
    console.log(setAll);
  }

}
