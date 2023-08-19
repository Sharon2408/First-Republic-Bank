import { Component } from '@angular/core';
import { FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
firstName!:FormControl;



  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    maritalStatus: ['', Validators.required],
    email: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
    pincode: ['', Validators.required],
    adharNumber: ['', Validators.required],
    panNumber: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    userId: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
