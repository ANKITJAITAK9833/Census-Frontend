import { Directive } from '@angular/core';
import { AsyncValidator , NG_ASYNC_VALIDATORS  , AbstractControl ,ValidationErrors} from '@angular/forms'
import { Observable } from 'rxjs';
import { UserService } from './user.service'
import { map } from 'rxjs/operators';
@Directive({
  selector: '[UniqueEmail]',
  providers:[{provide:NG_ASYNC_VALIDATORS, useExisting: UniqueEmailCheckDirective , multi:true}]
})
export class UniqueEmailCheckDirective implements AsyncValidator{

  constructor(private userService:UserService) { }




  validate (c: AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
    
    return new Promise((resolve ,reject)=>{
      this.userService.getUserByEmail(c.value).subscribe((data:any)=>{
        if(data.success){
          resolve({'UniqueEmail':true})
        }else
        {
          resolve(null);
        }
     })
    })
 }
}
