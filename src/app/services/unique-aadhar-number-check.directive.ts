import { Directive } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Directive({
  selector: '[appUniqueAadharNumber]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueAadharNumberCheckDirective, multi: true }]
})
export class UniqueAadharNumberCheckDirective {

  constructor(private userService: UserService) { }


  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    return new Promise((resolve, reject) => {
      this.userService.GetUserByAadharNumber(c.value).subscribe((data: any) => {

        if (data.success) {

          resolve({ 'appUniqueAadharNumber': true });
        } else {
          resolve(null);
        }
      });
    });
  }


}
