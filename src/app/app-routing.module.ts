import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {HouseListingComponent } from './house-listing/house-listing.component';
import { PopulationRegisterComponent } from './population-register/population-register.component'

const routes: Routes = [ {
    path: '',
    component: SignInComponent,
    data: { title: 'LOGIN' }
  },
  {
    path:'houselisting',
    component:HouseListingComponent,
    data:{title :'HOUSE LISTING' }
  }, {
    path:'populationregister',
    component:PopulationRegisterComponent,
    data:{title :'Population Registration' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login ' }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
