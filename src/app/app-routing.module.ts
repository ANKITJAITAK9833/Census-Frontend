import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { HouseListingComponent } from './volunteer/house-listing/house-listing.component';
import { PopulationRegisterComponent } from './volunteer/population-register/population-register.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ApproverComponent } from './approver/approver.component';
import { PendingRequestsComponent } from './approver/pending-requests/pending-requests.component';
import { ApprovedRequestsComponent } from './approver/approved-requests/approved-requests.component';
import { DeclinedRequestsComponent } from './approver/declined-requests/declined-requests.component';
// tslint:disable-next-line: max-line-length
import { VolunteerDeclinedRequestStatusComponent } from './volunteer/volunteer-declined-request-status/volunteer-declined-request-status.component';
// tslint:disable-next-line: max-line-length
import { VolunteerPendingRequestStatusComponent } from './volunteer/volunteer-pending-request-status/volunteer-pending-request-status.component';
import { ApproverGuardService } from './services/approver-guard.service';
import { VolunteerGuardService } from './services/volunteer-guard.service';
import { StatereportComponent } from './statereport/statereport.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: LoginComponent,
      pathMatch: 'full'
    },
    {
      path: 'signin',
      component: SignInComponent
    },{
      path: 'statereport',
      component: StatereportComponent
    }
  ]
}
  ,
{
  path: 'approver',
  component: ApproverComponent,
  canActivate: [ApproverGuardService],
  children: [
    {
      path: 'pendingrequests',
      component: PendingRequestsComponent
    },
    {
      path: 'approvedrequests',
      component: ApprovedRequestsComponent
    },
    {
      path: 'declinedrequests',
      component: DeclinedRequestsComponent
    }
  ]
},
{
  path: 'volunteerdeclinedrequest',
  component: VolunteerDeclinedRequestStatusComponent,
  pathMatch: 'full'
},
{
  path: 'volunteerpendingrequest',
  component: VolunteerPendingRequestStatusComponent,
  pathMatch: 'full'
},
{
  path: 'volunteer',
  component: VolunteerComponent,
  canActivate: [VolunteerGuardService],
  children: [
    {
      path: '', redirectTo: 'houselisting', pathMatch: 'full'
    },
    {
      path: 'populationregister',
      component: PopulationRegisterComponent,
      pathMatch: 'full'
    },
    {
      path: 'houselisting',
      component: HouseListingComponent,
      pathMatch: 'full'
    }

  ]

 },
 {
   path:'**',
   component:PageNotFoundComponent
 }
//  ,
// {
//   path: 'houselisting',
//   component: HouseListingComponent,
//   data: { title: 'HOUSE LISTING' }
// }, {
//   path: 'populationregister',
//   component: PopulationRegisterComponent,
//   data: { title: 'Population Registration' }
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
