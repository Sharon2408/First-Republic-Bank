import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Journey } from 'src/models/Journey';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(private http: HttpClient) { }
  getDetails() {
    return this.http.get<Journey[]>(environment.JourneyDeatils);
  }
}
