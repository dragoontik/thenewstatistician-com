import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tns-header-banner',
  templateUrl: './header-banner.component.html',
  styles: [
    `
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
      }
    `,
    `
      div {
        background-color: #1b1b1b;
      }
    `,
  ],
})
export class HeaderBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
