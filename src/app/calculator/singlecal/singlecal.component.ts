import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { calculationType } from 'src/models/calculationType';
import { CalculationTypeService } from 'src/services/calculation-type.service';

@Component({
  selector: 'app-singlecal',
  templateUrl: './singlecal.component.html',
  styleUrls: ['./singlecal.component.css']
})
export class SinglecalComponent implements OnInit {
  constructor(private router: Router,private ct: CalculationTypeService) { }

  @Input() calculator: any;
  type: calculationType[] = [];
  public show: boolean = true;
  calType!:string;
  toggle() {
    return (this.show = !this.show);
  }
  viewCalculator(name:string) {
    this.calType = name;
    return this.router.navigate(['frbcal/'+name]);
  }
  ngOnInit(): void {

    this.ct.fetchCalDetails().subscribe((res) => {
      this.type = res;
      console.log(res)
    })


  }
}
