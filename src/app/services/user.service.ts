import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  GetUserByEmail(email: string) {
    let url = `http://localhost:57762/api/User/?email=${email}`;
    console.log(url);
    return this.http.get<any[]>(url);
  }

  GetUserByAadharNumber(aadhar: string) {
    let url = `http://localhost:57762/api/User/?aadharNumber=${aadhar}`;
    console.log(url);
    return this.http.get<any[]>(url);
  }

  GetCensusId(censusId: number) {
    let url = `http://localhost:57762/api/HouseListing/?id=${censusId}`;
    console.log(url);
    return this.http.get<any[]>(url);
  }

}
