import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { CommonService } from 'src/services/common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'First-Republic-Bank';
  userInactive=false;
  sessionUrl=environment.sessionDetails;

  constructor(private commonservice:CommonService,private http:HttpClient) {  }
  ngOnInit(): void {
    this.http.get<sessionData[]>(this.sessionUrl).subscribe(
      res=>{
        console.log(res);
        if(res.length==0){
          this.userInactive=true;
        }
        },

    );
  }

  
  // emailjs.send("service_l6sm1i4","template_govhts9",{
  //   to_name: "Srikanth",
  //   password: "dsfdsf",
  //   to_email: "chicken959730@gmail.com",
  //   user_id: "wewdsa",
  //   });
}
interface sessionData{
  userId:number
  }