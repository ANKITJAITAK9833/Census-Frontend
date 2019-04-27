import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SignUp} from '../sign-up';
@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) { }

  postUser(model:SignUp)
  { 
    return this.http.post("http://localhost:57762/api/User",model)
  }
}
