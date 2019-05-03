import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDeclinedRequestStatusComponent } from './volunteer-declined-request-status.component';

describe('VolunteerDeclinedRequestStatusComponent', () => {
  let component: VolunteerDeclinedRequestStatusComponent;
  let fixture: ComponentFixture<VolunteerDeclinedRequestStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerDeclinedRequestStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerDeclinedRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
