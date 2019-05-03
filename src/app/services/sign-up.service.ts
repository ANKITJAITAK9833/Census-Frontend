import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SignUp} from '../models/sign-up';
@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) { }

  PostUser(user: SignUp , image: string , name: string) {
    return this.http.post('http://localhost:57762/api/User', { user , image , name});
  }
}
