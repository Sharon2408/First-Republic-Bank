import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { User } from 'src/models/user';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private alert: MessageService, private router: Router) { }
  user_details_url = environment.userDetails;

  signUp(form: User) {
    console.log(form);
   this.http.post<User[]>(this.user_details_url, form).subscribe((res)=>{
   
   });
  }
}
      

