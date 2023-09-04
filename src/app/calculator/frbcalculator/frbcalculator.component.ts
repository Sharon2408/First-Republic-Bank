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
  GSTType:string="";
  loanAmount: number = 100000;
  InterestRate: number = 4;
  Year: number = 1;
  p!: number;
  n!: number;
  r!: number;
  R!: number;
  pow!: number;
  Emi: String = "8514.99";
  GSTAmount: number = 100;
  GstPercent: number = 5;
  GstTotal: number = 0;
  TotalGST: String = "0";
  PreGSTAmount: string = "0";
  Calculatorname!: calculationType;
 
  EMICalculator() {
    this.p = this.loanAmount;
    this.n = this.Year * 12;
    this.r = (this.InterestRate / 12 / 100);
    this.Emi = (this.p * this.r * Math.pow((1 + this.r), this.n) / (Math.pow((1 + this.r), this.n) - 1)).toFixed(2);
    console.log(this.GstPercent)
  }
  GSTCalculator() {
    this.GstTotal = this.GSTAmount * this.GstPercent / 100;
  }
  GSTInclusivecal() {
    this.TotalGST = (this.GSTAmount - (this.GSTAmount * (100 / (100 + this.GstPercent)))).toFixed(2)
    this.PreGSTAmount=(this.GSTAmount-parseFloat(this.TotalGST.toString())).toFixed(2)
  }
  ngOnInit(): void {
    this.ct.fetchCalDetails().subscribe((res) => {
      this.type = res;
    })
    this.Calculatorname = this.route.snapshot.params['name']
    console.log(this.Calculatorname);


  }

}
