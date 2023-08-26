import { Component,OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import Swal from 'sweetalert2';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  constructor(
    private router: Router,
    private messageService: MessageService,
    private registeration: UserService
  ) { }

signinForm!:FormGroup;
userid!:FormControl;
password!:FormControl;
user_details: User[] = [];
ngOnInit(): void {
  this.userid = new FormControl('', [Validators.required]);
  this.password = new FormControl('', [Validators.required]);
  this.signinForm = new FormGroup({
    userid: this.userid,
    password: this.password,
  });
  console.log(this.userid,this.password);
}
onSubmit() {
  this.registeration.signIn().subscribe((response) => {
    this.user_details = response;
    let userlog = false; // Declare userlog here
    for (const user of this.user_details) {
      if (user.userid == this.signinForm.value.userid && user.password == this.signinForm.value.password) {
        userlog = true;
        break;
      }
    }
    
    if (userlog) {
      localStorage.setItem('token', Math.random().toString());
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login Successful',
      }).then(() => {
        this.router.navigate(['']);
        this.signinForm.reset();
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid userid or password',
        text: 'Login Failed',
      }).then(() => {
        this.signinForm.reset();
      });
    }
  });
}

}

