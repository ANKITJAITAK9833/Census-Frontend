import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class VolunteerRequestsService {

  constructor(private http: HttpClient) { }
  GetByStatus(status: string) {
    console.log(status);
    return this.http.get(`http://localhost:57762/api/User?status=${status}`);
  }
  ChangeStatus(userId: number, status: string) {
    console.log(status);
    return this.http.put(`http://localhost:57762/api/UserRequestStatus`, {userId , status});
  }

  GetStatusById(userId: number) {
    return this.http.get(`http://localhost:57762/api/UserRequestStatus/${userId}`);
  }
}
