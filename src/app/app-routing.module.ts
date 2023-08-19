import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrbcalculatorComponent } from './calculator/frbcalculator/frbcalculator.component';
const routes: Routes = [
  {
    path: "frbcal/:id",
    component: FrbcalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
