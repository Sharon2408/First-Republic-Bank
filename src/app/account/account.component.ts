import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
constructor(private userObj:UserService){

}

nomineeReq!:FormControl;

 firstname!:FormControl;
 lastname!:FormControl;
 gender!:FormControl;
 dob!:FormControl;
 marital!:FormControl;
address!:FormControl;
pincode!:FormControl;
aadhar!:FormControl;
pan!:FormControl;
email!:FormControl;
phone!:FormControl;




accountReg!:FormGroup;
accountDetails!:FormGroup;
nomineeDetails!:FormGroup;
userDetails!:User;
nominee:boolean=false;

ngOnInit(): void {
  this.email.setValue("hashdgsadhag")
  this.userObj.getActiveUser().subscribe(
    (res)=>{
      this.userDetails = res[0];
      console.log(this.userDetails);
      this.firstname.setValue(this.userDetails.firstname);
  this.lastname.setValue(this.userDetails.lastname);
  this.gender.setValue(this.userDetails.gender);
    }
  )

  this.nomineeReq = new FormControl('',Validators.required);
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

  


  this.accountReg = new FormGroup({
    firstname:this.firstname,
    lastname:this.lastname,
    gender:this.gender,
    dob:this.dob,
    marital:this.marital,
    address:this.address,
    pincode:this.pincode,
    aadhar:this.aadhar,
    pan:this.pan,
    email:this.email,
    phone:this.phone
    
  })
  // this.nomineeDetails = new FormGroup({

  // })
  // this.accountDetails = new FormGroup({
  //   nomineeReq : this.nomineeReq
  // })
 
}

}
