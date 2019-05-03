import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HouseListing} from '../models/house-listing';
@Injectable({
  providedIn: 'root'
})
export class HouseListingService {

  constructor(private http: HttpClient) { }

  public PostHouseData(houseModel: any)
   {
       return this.http.post("http://localhost:57762/api/HouseListing", houseModel);
   }

   public GetStateReport()
   {
     return this.http.get("http://localhost:57762/api/HouseListing?state=something");
   }
}
