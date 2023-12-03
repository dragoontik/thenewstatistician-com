import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'tns-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  tabIndex: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate([this.router.url]);
    console.log("Navigation comp:");
    console.log(this.router.url);
    // Account for refresh of tabs
    switch (this.router.url) {
      case '/courses':
        this.tabIndex = 0;
        break;
      case '/blog':
        this.tabIndex = 1;
      break;
      default:
        // navigate to courses as home page
        this.router.navigate(['/courses'])
        this.tabIndex = 0;
        break;
    }
  }

}
