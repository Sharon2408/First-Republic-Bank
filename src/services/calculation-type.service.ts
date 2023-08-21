import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { calculationType } from 'src/models/calculationType';
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class CalculationTypeService {

  constructor(private http:HttpClient) { }
  fetchCalDetails(){
    return this.http.get<calculationType[]>(environment.calculationType);
  }
}
