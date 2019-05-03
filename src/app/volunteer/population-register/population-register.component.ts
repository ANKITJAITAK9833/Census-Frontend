import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopulationRegister } from '../../models/population-register';
import { PopulationRegisterService } from '../../services/population-register.service';

@Component({
  selector: 'app-population-register',
  templateUrl: './population-register.component.html',
  styleUrls: ['./population-register.component.css']
})
export class PopulationRegisterComponent implements OnInit {

  genderType = ['Male', 'Female'];
  maritalStatusType = ['Married', 'Unmarried', 'Divorcee'];
  occupationStatusType = ['Employed', 'SelfEmployed', 'Student'];
  natureOfOccupationType = ['Public', 'Private', 'SelfEmployed'];
  relationShipToHeadType = ['Self', 'Spouse', 'Son', 'Daughter', 'Sibling', 'Grandson', 'Granddaughter'];
  checkDate = false;

  ageValidityError = false;

  maritalStatusDefaultValue = 'Unmarried';
  genderDefaultValue = 'Male';
  occupationStatusDefaultValue = 'Employed';
  natureOfOccupationDefaultValue = 'Private';
  relationshipToHeadDefaultValue = 'Son';

  @ViewChild('f') populationRegistrationForm: NgForm;
  populationRegister: PopulationRegister;
  constructor(private populationRegisterService: PopulationRegisterService) { }

  ngOnInit() {
  }

  ValidateAgeAtMarriage(ageAtMarriage: number) {
    if (ageAtMarriage < 1) {
      this.ageValidityError = true;
    } else {
      this.ageValidityError = false;
    }

  }
  ValidateDateOfBirth(date) {
    let enteredDate = new Date(date);
    let today = new Date();
    if ( enteredDate.getTime() >today.getTime()) {
      this.checkDate = true;
    } else {
   
      this.checkDate = false;
    }
  }

  OnSubmit() {
    this.populationRegister = this.populationRegistrationForm.value;
    console.log(this.populationRegister);
    this.populationRegister.userId = Number(window.sessionStorage.getItem('userId'));
    console.log(this.populationRegister.userId);
    this.populationRegisterService.PostPopulationRegister(this.populationRegister).subscribe(
      (populationRegister: any) => {
        if (populationRegister.data === true) {
          alert('Population Register Registered Successfully');
          this.populationRegistrationForm.reset();
        } else {
          alert('There was some error in adding data!');
        }
      },
      (error) => {
        alert('Some Error Occured');
      },
      () => {
        console.log('Operation Successfull');
      }
    );
  }
}
