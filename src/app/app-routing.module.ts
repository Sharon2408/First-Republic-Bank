import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrbcalculatorComponent } from './calculator/frbcalculator/frbcalculator.component';
const routes: Routes = [
  {
    path: "frbcal/:name",
    component: FrbcalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
