import { Component,OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  FormBuilder,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private registeration: UserService,
    private alert: MessageService,
    private http:HttpClient,
    private router: Router
  ) { }
firstCtrl!:FormGroup;
secondCtrl!:FormGroup;
thirdCtrl!:FormGroup;
signupForm!:FormGroup;
stepOne!:FormControl;
stepTwo!:FormControl;
stepThree!:FormControl;
firstname!:FormControl;
lastname!:FormControl;
gender!:FormControl;
marital!:FormControl;
address!:FormControl;
pincode!:FormControl;
aadhar!:FormControl;
pan!:FormControl;
email!:FormControl;
phone!:FormControl;
user_details:User[]=[];

ngOnInit(): void {
  this.firstname = new FormControl('', [
    Validators.required, 
    Validators.pattern(/^[a-zA-Z]{3,}$/),
  ]);
  this.lastname = new FormControl('', [
    Validators.required, 
    Validators.pattern(/^[a-zA-Z]{3,}$/),
  ]);
  this.gender = new FormControl('', [
    Validators.required, 
  ]);
  this.marital = new FormControl('', [
    Validators.required, 
  ]);
  this.address = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[#.0-9a-zA-Z\s,-]+$/), 
  ]);
  this.pincode = new FormControl('', [
    Validators.required, 
    Validators.pattern(/^\d{6}$/),
  ]);
  this.aadhar = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{12}$/), 
  ]);
  this.pan = new FormControl('', [
    Validators.required, 
    Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/),
  ]);
  this.email = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/), 
  ]);
  this.phone = new FormControl('', [
    Validators.required, 
    Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/),
  ]);
  this.firstCtrl = new FormGroup({
    firstname: this.firstname,
    lastname:this.lastname,
    gender:this.gender,
    maritalstatus:this.marital,
  });
  this.secondCtrl = new FormGroup({
    address: this.address,
    pincode:this.pincode,
    aadhar:this.aadhar,
    pan:this.pan,
  });
  this.thirdCtrl = new FormGroup({
    email: this.email,
    phone:this.phone,
  });
  this.signupForm = new FormGroup({
    firstname: this.firstname,
    lastname:this.lastname,
    gender:this.gender,
    maritalstatus:this.marital,
    address: this.address,
    pincode:this.pincode,
    aadhar:this.aadhar,
    pan:this.pan,
    email: this.email,
    phone:this.phone,
  });

 
}
onSubmit()
{
  this.registeration.signUp(this.signupForm.value);
}
}