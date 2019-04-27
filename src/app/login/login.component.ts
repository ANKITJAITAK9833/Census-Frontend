import { Component,ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs';
import {LoginService} from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @ViewChild('f') loginForm : NgForm;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  getAll()
  {
    this.loginService.getAll().subscribe(
     data=> console.log(data),
     error=>console.log(error.message),
     ()=>console.log("data fetched successfuly") 
    )
  }
  getSingle(id:HTMLInputElement)
  {
    this.loginService.getSingle(id.value).subscribe(
      data=>console.log(data),
      error=>console.log(error.message),
      ()=>console.log("success bro")
    )
  }

  onSubmit(){
  this.loginService.getByEmail(this.loginForm.value.email).subscribe(
    data=> console.log(data),
    error=>console.log(error.message),
    ()=>console.log("success")
  )

  }
  // onSubmit(form:NgForm)
  // {
  //   console.log(form );
  // }
}
