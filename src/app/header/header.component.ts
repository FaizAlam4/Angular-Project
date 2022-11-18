import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router){}

  navig(): void {
    this.router.navigate(['about']);
  }
  navigf(): void {
    this.router.navigate(['feature']);
  }
  navigl(): void {
    this.router.navigate(['login']);
  }
  navigs(): void {
    this.router.navigate(['signup']);
  }

 

  ngOnInit(): void {
  }

}
