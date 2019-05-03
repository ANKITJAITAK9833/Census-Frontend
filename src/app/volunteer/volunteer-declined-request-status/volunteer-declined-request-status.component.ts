import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-declined-request-status',
  templateUrl: './volunteer-declined-request-status.component.html',
  styleUrls: ['./volunteer-declined-request-status.component.css']
})
export class VolunteerDeclinedRequestStatusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  OnClick() {
    this.router.navigateByUrl('');
    window.sessionStorage.clear();
  }
}
