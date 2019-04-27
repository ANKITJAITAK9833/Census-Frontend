import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HouseListing} from '../house-listing';
@Injectable({
  providedIn: 'root'
})
export class HouseListingService {

  constructor(private http: HttpClient) { }

  public postHouseData(houseModel:any)
   {
       return this.http.post("http://localhost:57762/api/HouseListing",houseModel);
   }
}
