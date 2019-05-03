import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopulationRegister } from '../models/population-register';

@Injectable()
export class PopulationRegisterService {

  constructor(private http: HttpClient) { }
  PostPopulationRegister(populationRegister: any) {
    console.log(populationRegister);
    return this.http.post('http://localhost:57762/api/PopulationRegistration', populationRegister);
  }
}
