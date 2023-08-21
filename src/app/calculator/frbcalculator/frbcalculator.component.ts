import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-frbcalculator',
  templateUrl: './frbcalculator.component.html',
  styleUrls: ['./frbcalculator.component.css']
})
export class FrbcalculatorComponent implements OnInit{
  constructor( private actRoute: ActivatedRoute,){}

  ngOnInit(): void {
    
   
  }

}
