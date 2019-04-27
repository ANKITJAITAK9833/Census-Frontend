import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopulationRegister } from './../population-register';
import { PopulationRegisterService } from '../services/population-register.service';

@Component({
  selector: 'app-population-register',
  templateUrl: './population-register.component.html',
  styleUrls: ['./population-register.component.css']
})
export class PopulationRegisterComponent implements OnInit {
 @ViewChild('f') populationRegistrationForm: NgForm;
  populationRegister: PopulationRegister;
  constructor( private populationRegisterService :PopulationRegisterService) { }

  ngOnInit() {
  }
 onSubmit(){
    this.populationRegister = this.populationRegistrationForm.value;
    console.log(this.populationRegister)
    this.populationRegisterService.postPopulationRegister(this.populationRegister).subscribe(
      (data) => { console.log(data) }
    );
 }
}
