import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUp } from './../sign-up';
import { SignUpService } from '../services/sign-up.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('f') signUpForm: NgForm;
  signUp: SignUp
  //signUpService:SignUpService
  constructor(private signUpService: SignUpService) { }
  passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  firstNameLastNamePattern = "^[a-zA-Z ]*$"
  aadharPattern = "^[0-9].{11,11}$"
  ngOnInit() {
  }
  onSubmit() {
    this.signUp = this.signUpForm.value;
    console.log(this.signUp)
    this.signUpService.postUser(this.signUp).subscribe(
      (data) => { console.log(data) }
    );

    console.log('Hello');
  }
}
