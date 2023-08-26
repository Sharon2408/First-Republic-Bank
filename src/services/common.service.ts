import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) {
  

   }
   sessionUrl=environment.sessionDetails;
useractive:boolean=false;
   isUserActive():boolean{

console.log(this.useractive);
return this.useractive;
   }
}


