import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrbcalculatorComponent } from './calculator/frbcalculator/frbcalculator.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './user/signup/signup.component';
import { CalculatorComponent } from './calculator/calculator.component';
const routes: Routes = [
  {
    path: "frbcal/:name",
    component: FrbcalculatorComponent
  },
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },{
    path:"calculator/:id",
    component:CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
