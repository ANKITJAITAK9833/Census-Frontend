import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  GetAll() {
    return this.http.get('http://localhost:57762/api/User');
  }

  GetSingle(id: any) {
    console.log(id);
    let url = 'http://localhost:57762/api/User/' + id;
    return this.http.get(url);
  }

  GetByEmail(email: any) {
    let url = `http://localhost:57762/api/User/?email=${email}`;
    console.log(url);
    return this.http.get(url);
  }
}
