import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddResourcesService } from '../services/add-resources.service';
import { EditCourseService } from '../services/edit-course.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(
    public _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _editService: EditCourseService,
    public _resourcesService: AddResourcesService
  ) { }

  public inprogress = false;
  public coverImage:any= ""
  public fileSrc = "";
  public message = '';
  public resources:any = []

  public resourceId:any = ""
  ngOnInit(): void {
    if(this.data.option == 4) {
      this._resourcesService.getCourseResources({id: this.data.courseId}).subscribe((res:any)=> {
        if(res.status == false) {
          console.log("No resources");
          this.message = res.message;
        }else{
          console.log(res.resources);
          this.resources = res.resources;
        }
      })
    }
  }

  // Form Validations
  public courseDetails = this._formBuilder.group({
    name: ['', Validators.required],
    coverImage: ['', Validators.required],
    description: ['', Validators.required]
  })

  public resourceDetails = this._formBuilder.group({
    name: ['', Validators.required],
    file: ['', Validators.required],
  })

  public priceDetails = this._formBuilder.group({
    price: ['', Validators.required],
  })
// Course Updating
  onCoverImageChange(event: any) {
    let img = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img)
    reader.onload = ()=> {
     this.fileSrc = reader.result as string;
     this.coverImage = reader.result;
     this.courseDetails.patchValue({coverImage: reader.result});
     console.log(this.courseDetails.get('coverImage').value);
    }
   }

  saveCourse() {
    let id = this.data.courseId;
    if(this.courseDetails.invalid) {
      console.log("Form is invalid")
    }else {
      this.inprogress = true;
      let name = this.courseDetails.get('name').value;
      let coverImage = this.courseDetails.get('coverImage').value;
      let description = this.courseDetails.get('description').value;
      let details = {name, coverImage, description, id};
      console.log(details);
      
      this._editService.editCourse(details).subscribe((res:any)=> {
        if(res.status=== true) {
          this.inprogress = false;
          this.message = res.message
        }else {
          this.inprogress = false;
          this.message = res.message
        }
      })
    }
  }
  // Editing course resources

  editResource(id:any) {
    this.resourceId = id;
    console.log(this.resourceId);
    
  }
  onResourceFileChange(event: any) {
    let img = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img)
    reader.onload = ()=> {
     this.fileSrc = reader.result as string;
     this.coverImage = reader.result;
     this.resourceDetails.patchValue({file: reader.result});
     console.log(this.resourceDetails.get('file').value);
    }
  }
  saveResource() {
    let id = this.resourceId;
    if(this.resourceDetails.invalid) {
      console.log("Form is invalid")
    }else {
      this.inprogress = true;
      let name = this.resourceDetails.get('name').value;
      let file = this.resourceDetails.get('file').value;
      let details = {name, file, id};
      console.log(details);
      
      this._editService.editResource(details).subscribe((res:any)=> {
        if(res.status=== true) {
          this.inprogress = false;
          this.message = res.message;
        }else {
          this.inprogress = false;
          this.message = res.message;
        }
      })
    }
  }

  savePrice(){
    let id = this.data.courseId;
    let price = this.priceDetails.get('price')?.value;
    let details = {id, price};
    this._editService.editPrice(details).subscribe((res:any)=> {
      if(res.status=== true) {
        this.inprogress = false;
        this.message = res.message;
      }else {
        this.inprogress = false;
        this.message = res.message;
      }
    })
  }

  close() {
    this.dialogRef.close();
  }
}
