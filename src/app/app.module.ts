import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {SignUpService} from './services/sign-up.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginService } from "src/app/services/login.service";
import { PopulationRegisterService } from "src/app/services/population-register.service";
import { UniqueEmailCheckDirective } from './services/unique-email-check.directive';
 import {UserService} from "src/app/services/user.service";
import { HouseListingComponent } from './house-listing/house-listing.component';
import { PopulationRegisterComponent } from './population-register/population-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    UniqueEmailCheckDirective,
    HouseListingComponent,
    PopulationRegisterComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SignUpService, LoginService, UserService,PopulationRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
