import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'EhSaas';
  str:string="Welcome to";
  constructor(){
    setTimeout(() => {
    
      this.str='';
      this.title="Easy Helper with Self Assessment Automated System ";
    }, 2000);
  }

 

  ngOnInit(): void {
  }

}
