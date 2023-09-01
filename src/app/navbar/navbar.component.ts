import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NavModel } from 'src/models/navContent';
import { NavServiceService } from 'src/services/nav-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
submenuHide:boolean=true;
subMenuItem:any[]=[];
menuArray:string[]=["Calculators","Products"]
submenuTitle:string='';
optionObject!:NavModel;
optionArray:NavModel[]=[];
constructor(private navService:NavServiceService){}
ngOnInit(): void {
    $('#submenu').hide();
    $("#calc").mouseover(function(){
      $('#submenu').slideDown('slow');
    });
    
    $("#submenu").mouseleave(function(){
      $(this).slideUp("slow");
    });
    this.navService.getOptions().subscribe(
      (options)=>{
        this.optionArray=options;
        this.optionObject=options[0];
      }
    )   
}
menuItems:any=[
  {
    key:'0',
    label:'Calculators',
    children:[
      {
        key:'01',
        label:'Simple Interest',
        id:"si",
        target:"si-tab"
      },
      {
        key:'02',
        label:'EMI',
        id:"emi",
        target:"emi-tab"
      },
      {
        key:'03',
        label:'Fixed Deposit',
        id:"fd",
        target:"fd-tab"
      },
      {
        key:'04',
        label:'Salary',
        id:"sal",
        target:"sal-tab"
      }

    ]
  },
  {
    key:'1',
    label:'Products',
    children:[
      {
        key:'10',
        label:'Jeevan Karunya',
        id:"jk",
        target:"jk-tab"
      }
    ]
  }
  ,
  {
    key:'2',
    label:'ACCOUNTS',
    children:[
      {
        key:'20',
        label:'SAVINGS',
        id:"sav",
        target:"sav-tab"
      },
      {
        key:'21',
        label:'LOAN',
        id:"loan",
        target:"loan-tab"
      }
    ]
  },
  {
    key:'3',
    label:'LOANS',
    children:[
      {
        key:'30',
        label:'EDUCATIONAL LOAN',
        id:"edu-loan",
        target:"edu-tab"
        
      },
      {
        key:'31',
        label:'HOME LOAN',
        id:"home-loan",
        target:"home-tab"
      },
    ]
  },
  {
    key:'4',
    label:'OFFERS',
    children:[
      {
        key:'40',
        label:'PAISA VASOOL',
        id:"paisa",
        target:"paisa-tab"
      }
    ]
  },
  {
    key:'4',
    label:'OFFERS',
    children:[
      {
        key:'40',
        label:'PAISA VASOOL',
        id:"paisa",
        target:"paisa-tab"
      }
    ]
  },
  {
    key:'4',
    label:'OFFERS',
    children:[
      {
        key:'40',
        label:'PAISA VASOOL',
        id:"paisa",
        target:"paisa-tab"
      }
    ]
  }
];


menucontent(a:any):void{
  this.subMenuItem=a;

}
showContent(val:string){
  for (const option of this.optionArray) {
    if(val==option.label){
      this.optionObject=option;
      break;
    }
  }
}

}


