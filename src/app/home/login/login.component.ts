import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { VolunteerRequestsService } from '../../services/volunteer-requests.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  imageSrc='/assets/images/signup-image.jpg';
  constructor(private loginService: LoginService, private router: Router, private volunteerRequestService: VolunteerRequestsService) { }

  ngOnInit() {
  }
  GetAll() {
    this.loginService.GetAll().subscribe(
      data => console.log(data),
      error => console.log(error.message),
      () => console.log('data fetched successfuly')
    );
  }
  GetSingle(id: HTMLInputElement) {
    this.loginService.GetSingle(id.value).subscribe(
      data => console.log(data),
      error => console.log(error.message),
      () => console.log('success bro')
    );
  }




  OnSubmit() {
    this.loginService.GetByEmail(this.loginForm.value.email).subscribe(
      (user: any) => {
        if (user.data != null) {
          if (user.data.password === this.loginForm.value.password) {
            window.sessionStorage.setItem('userId', user.data.userId);
            console.log(window.sessionStorage.getItem('userId'));
            if (user.data.isApprover === true) {
              window.sessionStorage.setItem('role', 'Approver');
              alert('You are going to be logged in as Approver');
              this.loginForm.reset();
              this.router.navigateByUrl('approver/pendingrequests');
            } else {
              window.sessionStorage.setItem('role', 'Volunteer');
              this.volunteerRequestService.GetStatusById(Number(window.sessionStorage.getItem('userId'))).subscribe(
                (data: any) => {
                  console.log(data);
                  if (data.data.requestStatus === 2) {
                    this.router.navigateByUrl('volunteerpendingrequest');
                  } else if(data.data.requestStatus === 0) {
                    this.router.navigateByUrl('volunteerdeclinedrequest');
                  }

                },
                (error) => {
                  alert('Some error occured');
                }
              );
              alert('you are going to be logged in as volunteer');
              this.loginForm.reset();
              this.router.navigateByUrl('volunteer/houselisting');
            }
          } else {
            alert('Wrong UserName Or Password');
            this.loginForm.reset();
          }

        } else {
          alert('Not A Registred Email');
          this.loginForm.reset();
        }
      },
      (error) => {
        alert('some error occured');
        this.loginForm.reset();
      },
      () => console.log('success')

    )

  }

}
