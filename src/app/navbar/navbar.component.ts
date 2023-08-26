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

  $(document).ready(function(){
    $('#submenu').hide();
    $("li").mouseover(function(){
      $('#submenu').slideDown('slow');
      console.log("hey")
    });
    
    
    
    $("#submenu").mouseleave(function(){
      $(this).slideUp("slow");
    });
  })

  
    
}
menuItems:any=[
  {
    key:'0',
    label:'Calculators',
    children:[
      {
        key:'01',
        label:'Simple Interest'
      },
      {
        key:'02',
        label:'EMI'
      },
      {
        key:'03',
        label:'Fixed Deposit'
      },
      {
        key:'04',
        label:'Salary'
      }

    ]
  },
  {
    key:'1',
    label:'Products',
    children:[
      {
        key:'10',
        label:'Jeevan Karunya'
      }
    ]
  }
];
subMenuItem:any[]=[];

menucontent(a:any):void{
  this.subMenuItem=a;

}
}


