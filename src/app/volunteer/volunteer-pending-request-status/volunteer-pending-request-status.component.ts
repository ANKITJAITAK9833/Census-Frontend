import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-pending-request-status',
  templateUrl: './volunteer-pending-request-status.component.html',
  styleUrls: ['./volunteer-pending-request-status.component.css']
})
export class VolunteerPendingRequestStatusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

 OnClick() {
   this.router.navigateByUrl('');
   window.sessionStorage.clear();
 }
}
