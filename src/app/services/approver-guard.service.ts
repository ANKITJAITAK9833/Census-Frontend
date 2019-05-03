
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ApproverGuardService implements CanActivate {

  constructor(private router: ActivatedRoute, private route: Router) { }

  canActivate(): boolean {
    if (window.sessionStorage.getItem('userId') === null || window.sessionStorage.getItem('role') !== 'Approver') {
      window.alert('You don\'t have permission to view this page.You Need To Log In First');
      window.sessionStorage.clear();
      this.route.navigateByUrl('');
      return false;
    } else {
      return true;
    }
  }

}

