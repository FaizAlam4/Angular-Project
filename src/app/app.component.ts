import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EhSaas';
  str:string="Welcome to";
  constructor(){
    setTimeout(() => {
    
      this.str='';
      this.title="Easy Helper with Self Assessment automated System ";
    }, 2000);
  }
  
}
