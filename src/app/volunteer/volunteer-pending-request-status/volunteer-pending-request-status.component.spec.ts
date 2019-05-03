import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerPendingRequestStatusComponent } from './volunteer-pending-request-status.component';

describe('VolunteerPendingRequestStatusComponent', () => {
  let component: VolunteerPendingRequestStatusComponent;
  let fixture: ComponentFixture<VolunteerPendingRequestStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerPendingRequestStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerPendingRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
