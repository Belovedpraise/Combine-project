import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/Auth/auth.service';
import { AddCourseService } from '../services/add-course.service';
import { AddResourcesService } from '../services/add-resources.service';
import { PaymentService } from '../services/payment.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  show = false;

  public courseCategories: Array<string> = ['Design', 'Development', 'Marketing', 'It and Software', 'Personal Development', 'Business', 'Photography', 'Music'];


  public courseAlreadyExist = false;
  public courseErrorMessage = '';
  public resourcesAlreadyExists = false;
  public resourcesErrorMessage = '';

  public errorOccurred = false;
  public errorOccurredMessage = '';
  public courseId = ''

  public fileSrc = ''

  disabled = true;
  loading = false;

  favoriteSeason: string;
  // seasons: string[] = ['Winter', 'Spring', 'Summer',];

  firstFormGroup = this._formBuilder.group({
    courseName: ['', Validators.required],
    courseCategory: ['', Validators.required],
    courseDescription: ['', Validators.required],
    coverImage: ['', Validators.required]
  });


  stageTwoFormGroup = this._formBuilder.group({
    resourcesName: ['', Validators.required],
    resourcesFile: ['', Validators.required]
  });

  thirdStageFormGroup = this._formBuilder.group({
    free_paid: ['', Validators.required]
  })

  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });
  isOptional = true;

  constructor(
    private _formBuilder: FormBuilder,
    private _addCourse: AddCourseService,
    private _addresources: AddResourcesService,
    private _addpayment: PaymentService
    ) {}

  ngOnInit(): void {
  }



  // stage one of the stepper
  onSelect(event: any) {
    this.firstFormGroup.patchValue({courseCategory: event.target.value});
  }

  onCoverImageChange(event: any) {
   let img = event.target.files[0];
   const reader = new FileReader();
   reader.readAsDataURL(img)
   reader.onload = ()=> {
    this.fileSrc = reader.result as string;
    this.firstFormGroup.patchValue({coverImage: reader.result});
    console.log(this.firstFormGroup.get('coverImage').value);
   }
  }

  nextStep() {
    if(this.firstFormGroup.invalid) {
      console.log("Form is invalid")
    }else {
      this.loading = true;

      let courseName = this.firstFormGroup.get('courseName').value;
      let courseCategory = this.firstFormGroup.get('courseCategory').value;
      let courseDescription = this.firstFormGroup.get('courseDescription').value;
      let coverImage = this.firstFormGroup.get('coverImage').value;
      let courseObject = {courseName, courseCategory, courseDescription, coverImage};
      this._addCourse.addCourse(courseObject).subscribe((res: any)=> {
        if(res.status == true) {
          console.log("Successful");
          this.courseId = res.lastCourseId

          this.loading = false;
          this.disabled = false;

        }else if(res.errorOccurred == true){
          console.log(res)
          this.disabled = false;
          this.loading = false;
          this.errorOccurred = true;
          this.errorOccurredMessage = res.message;
        }else if (res.isExist == true ) {
          this.disabled = false;
          this.loading = false;
          this.courseAlreadyExist = true;
          this.courseErrorMessage = res.message;
        }
      },
      err=>(console.log(err))
      )
    }
  }



  // stagetwo of the stepper
  onFileChange(event: any){
    let file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = ()=> {
      this.fileSrc = reader.result as string;
      this.stageTwoFormGroup.patchValue({resourcesFile: reader.result});
      console.log(this.stageTwoFormGroup.get('resourcesFile').value);
    }
  }

  secondStep() {
    if(this.stageTwoFormGroup.invalid){
      console.log("Form is Invald")
    }else {
      this.loading = true;

      let resourcesName = this.stageTwoFormGroup.get('resourcesName').value;
      let resourcesFile = this.stageTwoFormGroup.get('resourcesFile').value;

      let resourcesObject = {resourcesName, resourcesFile};
      this._addresources.addResources(resourcesObject).subscribe((res: any)=> {
        if (res.status == true) {
          console.log("Successfully");
          this.loading = false;
        }else if(res.errorOccurred == true){
          this.loading = false;
          console.log(res)
          this.errorOccurred = true;
          this.errorOccurredMessage = res.massage;
        }else if (res.isExist == true ) {
          console.log(res)
          this.loading = false;

          this.resourcesAlreadyExists = true;
          this.resourcesErrorMessage = res.message;
          this.courseId = res.lastCourseId
        }
      },
      err=>(console.log(err))
      )
    }
  }



  thirdStep() {
      if(this.thirdStageFormGroup.invalid){
        console.log("Form is Invalid")
      }else{
        this.loading = true;

        let free_paid = this.thirdStageFormGroup.get('free_paid').value;
       console.log(free_paid)
        let paymentObject = {free_paid, courseId: this.courseId};
        this._addpayment.addPayment(paymentObject).subscribe((res: any)=>{
            if (res.status == true) {
              console.log("Successfully");
              this.loading = false;
            }else if(res.errorOccurred == true) {
              console.log(res);
              this.loading = false;

              this.errorOccurred = true;
              this.errorOccurredMessage = res.massage;
            }
        },
        err=>(console.log(err))
        )

      }

  }


  public longText = "In this module you'll learn what programming means";

  // public favoriteSeason = "";
  // seasons: string[] = ['Free', 'Paid'];

  // getFreePaid() {
  //   return this.addCourse.get('freePaid');
  // }


  // onFileChange(event:any) {
  //   // this.fileSrc = <File>event.target.files[0];
  //   let img = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(img);
  //   reader.onload = ()=>{
  //     this.fileSrc = reader.result as string;
  //     this.addCourse.patchValue({courseFile: reader.result});
  //   }
  // }


  // onCoverImageChange(event:any) {
  //   // this.coverImageSrc = <File>event.target.files[0];
  //   let img = event.target.files[0]
  //   const reader = new FileReader();
  //   reader.readAsDataURL(img);
  //   reader.onload =()=>{
  //     this.coverImageSrc = reader.result as string;
  //     this.addCourse.patchValue({coverImage: reader.result})
  //   }
  // }

  // saveCourse() {
  //   const formData = new FormData();
  //   formData.append('courseName', this.addCourse.get('courseName')?.value)
  //   formData.append('category', this.addCourse.get('courseCategory')?.value)
  //   formData.append('courseDescription', this.addCourse.get('courseDescription')?.value)
  //   formData.append('freePaid', this.addCourse.get('freePaid')?.value)
  //   formData.append('price', this.addCourse.get('price')?.value)
  //   formData.append('courseFile', this.addCourse.get('courseFile')?.value)
  //   formData.append('coverImage', this.addCourse.get('coverImage')?.value)

  //   const obj = {
  //     courseName: this.addCourse.get('courseName').value,
  //     courseCategory: this.addCourse.get('courseCategory').value,
  //     courseDescription: this.addCourse.get('courseDescription').value,
  //     freePaid: this.addCourse.get('freePaid').value,
  //     price: this.addCourse.get('price').value,
  //     // courseFile: this.addCourse.get('courseFile').value,
  //     // coverImage: this.addCourse.get('coverImage').value,

  //   }
  //   console.log(obj)
  //   this._Auth.addCourse({obj}).subscribe(res=> {
  //     console.log(res);
  //   },

  //   err=>console.log(err));
  // }
}
