import { Directive } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Directive({

  selector: '[CensusIdCheck]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: CensusIdCheckDirective, multi: true }]
})
export class CensusIdCheckDirective {

  constructor(private userService: UserService) { }


  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    return new Promise((resolve, reject) => {
      console.log('hi i am in directive...census id ');
      this.userService.GetCensusId(c.value).subscribe((data: any) => {
        if (data.success) {
          resolve(null);
        } else {
          resolve({ 'CensusIdCheck': true })
        }
      })
    })
  }

}
