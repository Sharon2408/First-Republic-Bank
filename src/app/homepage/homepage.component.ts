import { Component, OnInit } from '@angular/core';
import { Journey } from 'src/models/Journey';
import { JourneyService } from 'src/services/journey.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private journeyService: JourneyService) { }

  data: Journey[] = [];

  ngOnInit(): void {
    this.journeyService.getDetails().subscribe((res) => {
      this.data = res;
      console.log(res);
    })
  }
}
