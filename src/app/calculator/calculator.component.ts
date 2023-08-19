import { Component, Input, OnInit } from '@angular/core';
import { CalculationTypeService } from 'src/services/calculation-type.service';
import { calculationType } from 'src/models/calculationType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  constructor(private router: Router,private ct: CalculationTypeService) { }

  @Input() calculator: any;
  type: calculationType[] = [];
  public show: boolean = true;
  calType!: number;
  toggle() {
    return (this.show = !this.show);
  }
  viewCalculator(id: number) {
    this.calType = id;
    return this.router.navigate(['frbcal/'+id]);
  }
  ngOnInit(): void {

    this.ct.fetchCalDetails().subscribe((res) => {
      this.type = res;
      console.log(res)
    })


  }
}
