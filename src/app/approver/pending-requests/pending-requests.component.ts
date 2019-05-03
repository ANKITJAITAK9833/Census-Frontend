import { Component, OnInit } from '@angular/core';
import { VolunteerRequestsService } from './../../services/volunteer-requests.service';
@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {
  requests: Array<any> = [];
  page; //for paging

  constructor(private volunteerRequestService: VolunteerRequestsService) {
    
   }

  RefreshList() {
    this.volunteerRequestService.GetByStatus('Pending').subscribe(
      (data: any) => {
        console.log(data);
        this.requests = data.data;
        console.log(this.requests);
      },
      error => console.log(error),
      () => console.log('Operation Completed')
    );
  }

  ngOnInit() {
    this.RefreshList();
  }
 
  ChangeStatus(userId: number, status: string) {
    console.log('status  ' + status);
    this.volunteerRequestService.ChangeStatus(userId, status).subscribe(
      (data: any) => {
        console.log(data);
        if (status === 'Approved') {
           alert('Approved');
         } else {
           alert('Declined');
         }
        this.RefreshList();
      },
      error => console.log(error),
      () => console.log('Operation Completed ')
    );

  }

}
