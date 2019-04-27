import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get('http://localhost:57762/api/User');
  }

  getSingle(id:any)
  { 
    console.log("blaaaa" + id);
   let url ='http://localhost:57762/api/User/'+id;
    return this.http.get(url);
  }

  getByEmail(email:any)
  {
     let url =`http://localhost:57762/api/User/?email=${email}`;
     console.log( url);
     return this.http.get(url);
  }
}
