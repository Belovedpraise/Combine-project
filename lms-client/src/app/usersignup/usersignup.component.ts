import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  public registrationForm: FormGroup;

  public loading: boolean = false;

  public passwordNotMatch: boolean = false;

  public userExist: boolean = false;

  public userExistErrMsg: string = "";

  public Auth: string = "";

  constructor(
    private _fb: FormBuilder,
    private _Auth: AuthService,
    private _router: Router
    ) {
    this.registrationForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      mobileNumber: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  register() {

    // ENABLE THE LOADER
    this.loading = true;

    // DESTRUCTURE THE FORM CONTROLS
    let firstName = this.registrationForm.controls.firstName.value;
    let lastName = this.registrationForm.controls.lastName.value;
    let email = this.registrationForm.controls.email.value;
    let mobileNumber = this.registrationForm.controls.mobileNumber.value;
    let userName = this.registrationForm.controls.userName.value;
    let password = this.registrationForm.controls.password.value;
    let confirmPassword = this.registrationForm.controls.confirmPassword.value;

    // CHECK IF THE FORM IS VALID AND PASSOWRD INP VALUE AND CONFIRM PASSWORD INP MATCHES
    if (!this.registrationForm.invalid && confirmPassword == password) {
      let userObj = {
        firstName,
        lastName,
        email,
        mobileNumber,
        userName,
        password
      }

      console.log(userObj);

      // SEND USER OBJECT TO SERVICES
      this._Auth.signup(userObj).subscribe((res:any)=> {
        this.loading = false;

        // CHECK IF RESPONSE IS USER EXIST
        if(res.userExist == true) {
          this.userExist = true;
          this.userExistErrMsg = res.message;
        };

        // CHECK IF THE RESPOONSE IS SUCCESS
        if (res.success == true) {
          this.Auth = res.token;
          localStorage.setItem("Auth", this.Auth);
          this.registrationForm.reset();
          this._router.navigate(['/login'])
        }
      },
      err=>(console.log(err))
      );
    } else if(password !== confirmPassword) {
      this.loading = false;
      this.passwordNotMatch = true;
    }
  }

}
