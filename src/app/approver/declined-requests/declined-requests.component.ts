import { Component, OnInit } from '@angular/core';
import { VolunteerRequestsService } from 'src/app/services/volunteer-requests.service';

@Component({
  selector: 'app-declined-requests',
  templateUrl: './declined-requests.component.html',
  styleUrls: ['./declined-requests.component.css']
})
export class DeclinedRequestsComponent implements OnInit {
  requests: Array<any> = [];
  page; //for paging
  constructor(private volunteerRequestService: VolunteerRequestsService) { }

  ngOnInit() {
    this.volunteerRequestService.GetByStatus('Declined').subscribe(
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
