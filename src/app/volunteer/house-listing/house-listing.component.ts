import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HouseListing } from '../../models/house-listing';
import { HouseListingService } from '../../services/house-listing.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})
export class HouseListingComponent implements OnInit {
// tslint:disable-next-line: max-line-length
  public StateArray = new Array('Andaman & Nicobar', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra & Nagar Haveli', 'Daman & Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu','Tripura', 'Uttar Pradesh', 'Uttaranchal', 'West Bengal');  
  state = 'Delhi';
  roomValidityError = false;
  ownershipStatusDefaultValue = 'Owner';

  ownershipStatus = ['Owner', 'Rented'];

  @ViewChild('f') houseListingForm: NgForm;
  houseListing: HouseListing;
  constructor(private houseListingService: HouseListingService) { }

  ngOnInit() {
  }



  ValidateRoom(numberOfRooms: number) {
    if (numberOfRooms < 1) {
      this.roomValidityError = true;
    } else {
      this.roomValidityError = false;
    }

  }

  OnSubmit() {
    console.log(this.houseListingForm.value.ownerShipStatus );
    this.houseListing = this.houseListingForm.value;
    console.log(this.houseListing);
    this.houseListingService.PostHouseData(this.houseListing).subscribe(
      (houseList: any) => {
        console.log(houseList);
        if (houseList.data!==null) {
          alert('HouseList Registred Successfully! Your CensusHouse Id Is:' + houseList.data.houseListingId);
          this.houseListingForm.reset();
        } else {
          alert('There was some error in adding data! Some fields may be empty');
        }
      },
      (error) => {
       alert('Some error occured');

      },
      () => {
        console.log('Operation Successfull');
      }

    );

  }
}
