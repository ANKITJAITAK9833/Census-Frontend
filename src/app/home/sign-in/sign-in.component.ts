import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUp } from '../../models/sign-up';
import { SignUpService } from '../../services/sign-up.service';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  imageSrc='/assets/images/signup-image.jpg';
  constructor(private signUpService: SignUpService, private router: Router) { }
  @ViewChild('f') signUpForm: NgForm;
  signUp: SignUp;
  display: boolean = false;
  base64textString: string;
  fileToUpload: File = null;
  binaryString: string;
  imageUrl = '/assets/images/userImage.png';
  passwordPattern = '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  firstNameLastNamePattern = '^[a-zA-Z ]*$';
  aadharPattern = '^[0-9].{11,11}$';
  
  ngOnInit() {
  }

  OnSubmit() {
    if (this.fileToUpload == null) {
      alert('You need to upload an image');
    }
    else {

      if (this.fileToUpload.type === 'image/jpeg' || this.fileToUpload.type === 'image/png') {
        this.signUp = this.signUpForm.value;
        console.log(this.signUp);
        this.signUpService.PostUser(this.signUp, this.binaryString, this.fileToUpload.name).subscribe(
          (signUpData: any) => {
            if (signUpData.data === true) {
              alert('Congratulations!!  You Are  Sucessfully Registered');
              this.signUpForm.reset();
              this.router.navigateByUrl('');
            } else {
              alert('some error occured !please check validity of fields');
            }
          },
          (error) => {
             alert('Some error occured');
          },
          () => {
            console.log('Operation Successful');
          }
        );
      } else {
        alert('image format must be jpeg oe png');
      }
    }
  }


    OnImageUpload(evt: any) {
      this.display = true;
      this.fileToUpload = evt.target.files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        console.log(event);
        this.binaryString = btoa(event.target.result);
        this.base64textString = 'data:image/png;base64,' + btoa(event.target.result);

      };
      reader.readAsBinaryString(this.fileToUpload);
    }



  }
