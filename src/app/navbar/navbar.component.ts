import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
submenuHide:boolean=true;

menuArray:string[]=["Calculators","Products"]
submenuTitle:string='';


ngOnInit(): void {
  $("#submenu").hide();

  $("#submenu").mouseover(function(){
    $(this).show();
  });



  $("#submenu").mouseout(function(){
    $(this).slideUp("slow");
  });

  
    
}

menucontent(a:string):void{
this.submenuTitle=a;
  $("#submenu").slideDown('slow');


}
}

