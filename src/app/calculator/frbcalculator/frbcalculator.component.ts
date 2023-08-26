import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { calculationType } from 'src/models/calculationType';
import { CalculationTypeService } from 'src/services/calculation-type.service';
@Component({
  selector: 'app-frbcalculator',
  templateUrl: './frbcalculator.component.html',
  styleUrls: ['./frbcalculator.component.css']
})
export class FrbcalculatorComponent implements OnInit {
  type: calculationType[] = [];
  constructor(private ct: CalculationTypeService, private route: ActivatedRoute,) { }
  calculator: calculationType = {
    id: 0,
    name: '',
    imgLogo: '',
    imgBanner: '',
    Content: ''
  }
  loanAmount: number = 100000;
  InterestRate: number = 4;
  Year: number = 1;
  p!: number;
  n!: number;
  r!: number;
  pow!: number;
  EMIAmount: number = 8514.99;
  Calculatorname!: calculationType;
  EMICalculator() {
    this.p = this.loanAmount;
    this.n = this.Year * 12;
    this.r = this.InterestRate / 12 / 100;
    this.pow = Math.pow((1 + this.r), this.n)
    this.EMIAmount = this.p * this.r * this.pow / this.pow - 1;


    console.log("power"+this.pow);
  }
  ngOnInit(): void {
    this.ct.fetchCalDetails().subscribe((res) => {
      this.type = res;
    })
    this.Calculatorname = this.route.snapshot.params['name']
    console.log(this.Calculatorname);

  }

}
