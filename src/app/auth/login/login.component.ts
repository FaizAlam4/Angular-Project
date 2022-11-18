import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router){}

  func(){
    this.router.navigate(['signup']);
  }

  onSubmit(data:any){
console.log(data);
}


  ngOnInit(): void {
  }

}
