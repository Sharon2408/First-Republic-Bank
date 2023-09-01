import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { NavModel } from 'src/models/navContent';


@Injectable({
  providedIn: 'root'
})
export class NavServiceService {

  constructor(private httpObj:HttpClient) { }
  getOptions(){
    return this.httpObj.get<NavModel[]>(environment.navbar);
  }

}
