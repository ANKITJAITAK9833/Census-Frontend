import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
  
  constructor(private http: HttpClient) { }
  getUserByEmail(email:string)
  {
    let url =`http://localhost:57762/api/User/?email=${email}`;
    // console.log(url);
    return this.http.get<any[]>(url);
      
    
  }
}
