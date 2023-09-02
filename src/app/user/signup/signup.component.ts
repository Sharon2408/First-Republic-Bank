import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  FormBuilder,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { MessageService, Message } from 'primeng/api';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { ErrorStateMatcher } from '@angular/material/core';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { get } from 'jquery';

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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private registeration: UserService,
    private alert: MessageService,
    private http: HttpClient,
    private router: Router
  ) { }
  firstCtrl!: FormGroup;
  secondCtrl!: FormGroup;
  thirdCtrl!: FormGroup;
  signupForm!: FormGroup;
  stepOne!: FormControl;
  stepTwo!: FormControl;
  stepThree!: FormControl;
  firstname!: FormControl;
  lastname!: FormControl;
  gender!: FormControl;
  marital!: FormControl;
  address!: FormControl;
  pincode!: FormControl;
  aadhar!: FormControl;
  pan!: FormControl;
  email!: FormControl;
  phone!: FormControl;
  dob!:FormControl;
  user_details: User[] = [];
  randUser!: number;
  randPass!: number;
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
    this.dob = new FormControl('', [
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
      lastname: this.lastname,
      gender: this.gender,
      dob:this.dob,      
    });
    this.secondCtrl = new FormGroup({
      address: this.address,
      pincode: this.pincode,
      aadhar: this.aadhar,
      pan: this.pan,
    });
    this.thirdCtrl = new FormGroup({
      marital: this.marital,
      email: this.email,
      phone: this.phone,
    });
    this.signupForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      gender: this.gender,
      dob:this.dob,
      marital: this.marital,
      address: this.address,
      pincode: this.pincode,
      aadhar: this.aadhar,
      pan: this.pan,
      email: this.email,
      phone: this.phone,
      islogged: this.builder.control(false),
      
    });


  }
  onSubmit() {
    console.log("The form is submitting");
    this.randUser = Math.floor(Math.random() * 1000000000000) + 1;
    this.randPass = Math.floor(Math.random() * 10000) + 1;
    emailjs.init('J0iciQN9nlJtRITYu');
    emailjs.send("service_l6sm1i4", "template_govhts9", {
      to_name: this.signupForm.value.firstname,
      userid: this.randUser,
      password: this.randPass,
      to_email: this.signupForm.value.email,
    });
    this.signupForm.value.userid = this.randUser;
    this.signupForm.value.password = this.randPass;
    const currentDate = new Date();
    this.signupForm.value.lastLogged = currentDate;
    this.registeration.signUp(this.signupForm.value);
    Swal.fire({
      icon: 'success',
      title: 'Registered successfully!',
      text: 'Successfully signup',
    }).then(() => {
      this.signupForm.reset();
    });
    this.router.navigate([""]);
  };
}