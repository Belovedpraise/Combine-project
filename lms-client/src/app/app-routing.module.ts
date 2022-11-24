import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/Auth/auth.guard';
import { AddCourseComponent } from './add-course/add-course.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { ContactComponent } from './contact/contact.component';
import { ViewCategoryComponent } from './categories-list/view-category/view-category.component';
import { EnrollForACourseComponent } from './user/enroll-for-a-course/enroll-for-a-course.component';
import { CartComponent } from './user/cart/cart.component';

import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile.component';
import { PayementComponent } from './payement/payement.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: UserpageComponent},
  {path: 'signup', component: UsersignupComponent },
  {path: 'contact', component: ContactComponent},
  {path: "user", component: NavComponent, children: [
    {path:"dashboard", component: DashboardComponent},
    {path: "my-courses", component: UserCoursesComponent},
    {path:"add-course", component: AddCourseComponent},
    {path: "enroll", component: EnrollForACourseComponent},
  {path: "profile", component: ProfileComponent},
    {path: "cart", component: CartComponent},
    {path: "changepassword", component: ChangepasswordComponent},
    {path: "payment", component:PayementComponent}
  ]},
  {path: 'login', component: UserloginComponent},
  {path: 'course', component: CourseComponent},
  {path: 'categories/:name', component: ViewCategoryComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
