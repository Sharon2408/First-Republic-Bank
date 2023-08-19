import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupFormComponent implements OnInit {
  personalInfoForm: FormGroup;
  contactInfoForm: FormGroup;
  accountInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required]
    });

    this.contactInfoForm = this.formBuilder.group({
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      aadharNo: ['', Validators.required],
      panNo: ['', Validators.required]
    });

    this.accountInfoForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.personalInfoForm.valid && this.contactInfoForm.valid && this.accountInfoForm.valid) {     
      console.log('Form submitted successfully');
    }
  }
}
