import { Component, OnInit } from '@angular/core';
import { VolunteerRequestsService } from 'src/app/services/volunteer-requests.service';

@Component({
  selector: 'app-approved-requests',
  templateUrl: './approved-requests.component.html',
  styleUrls: ['./approved-requests.component.css']
})
export class ApprovedRequestsComponent implements OnInit {
  requests: Array<any> = [];
  constructor(private volunteerRequestService: VolunteerRequestsService) { }
  page; //for paging
  ngOnInit() {
    this.volunteerRequestService.GetByStatus('Approved').subscribe(
      (data: any) => {
        console.log(data);
        this.requests = data.data;
        console.log(this.requests);
      },
      error => console.log(error),
      () => console.log('Operation Completed')
    );
  }

}
