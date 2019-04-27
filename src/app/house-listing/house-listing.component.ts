import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HouseListing } from './../house-listing';
import { HouseListingService } from '../services/house-listing.service';
@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})
export class HouseListingComponent implements OnInit {
  @ViewChild('f') houseListingForm: NgForm;
  houseListing: HouseListing;
  constructor(private houseListingService: HouseListingService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.houseListing = this.houseListingForm.value;
    console.log(this.houseListing)
    this.houseListingService.postHouseData(this.houseListing).subscribe(
      (data) => { console.log(data) }
    );

  }
}
