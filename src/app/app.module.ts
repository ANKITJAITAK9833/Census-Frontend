import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule} from 'angular-webstorage-service';
import { RouterModule, Routes } from '@angular/router';
import {SignUpService} from './services/sign-up.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { LoginService } from 'src/app/services/login.service';
import { PopulationRegisterService } from 'src/app/services/population-register.service';
import { UniqueEmailCheckDirective } from './services/unique-email-check.directive';
import { UserService } from 'src/app/services/user.service';
import { HouseListingComponent } from './volunteer/house-listing/house-listing.component';
import { PopulationRegisterComponent } from './volunteer/population-register/population-register.component';
import { UniqueAadharNumberCheckDirective } from './services/unique-aadhar-number-check.directive';
import { CensusIdCheckDirective } from './services/census-id-check.directive';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ApproverComponent } from './approver/approver.component';
import { ApproverHeaderComponent } from './approver/approver-header/approver-header.component';
import { PendingRequestsComponent } from './approver/pending-requests/pending-requests.component';
import { DeclinedRequestsComponent } from './approver/declined-requests/declined-requests.component';
import { ApprovedRequestsComponent } from './approver/approved-requests/approved-requests.component';
import { VolunteerHeaderComponent } from './volunteer/volunteer-header/volunteer-header.component';
import { MatInput, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { VolunteerRequestsService } from './services/volunteer-requests.service';
import { VolunteerDeclinedRequestStatusComponent } from './volunteer/volunteer-declined-request-status/volunteer-declined-request-status.component';
import { VolunteerPendingRequestStatusComponent } from './volunteer/volunteer-pending-request-status/volunteer-pending-request-status.component';
import { VolunteerGuardService } from './services/volunteer-guard.service';
import { ApproverGuardService } from './services/approver-guard.service';
import { StatereportComponent } from './statereport/statereport.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    UniqueEmailCheckDirective,
    HouseListingComponent,
    PopulationRegisterComponent,
    UniqueAadharNumberCheckDirective,
    CensusIdCheckDirective,
    VolunteerComponent,
    ApproverComponent,
    PendingRequestsComponent,
    DeclinedRequestsComponent,
    ApprovedRequestsComponent,
    ApproverHeaderComponent,
    VolunteerHeaderComponent,
    VolunteerDeclinedRequestStatusComponent,
    VolunteerPendingRequestStatusComponent,
    StatereportComponent,
    HomeComponent,
    HomeHeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxPaginationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
// tslint:disable-next-line: max-line-length
  providers: [SignUpService, LoginService, ApproverGuardService, VolunteerGuardService, UserService, PopulationRegisterService,VolunteerRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
