import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { User } from 'src/models/user';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private alert: MessageService, private router: Router) { }
  user_details_url = environment.userDetails;

  signUp(form: User) {
    return this.http.post<User[]>(this.user_details_url, form).subscribe(
      {
        next: () => {

          setTimeout(() => {
            this.router.navigate(['/signin']);
          }, 1000);


        },
        error: () => {
          console.log('error')
          this.alert.add({
            key: 'tc',
            severity: 'error',
            summary: 'Try again later',
            detail: 'Something went wrong',
          });
        }
      }
    );

  }
}
