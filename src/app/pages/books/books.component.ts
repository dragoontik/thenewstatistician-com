import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'tns-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title
  ) { 
    this.title.setTitle('The New Statistician | Books');


  }

  ngOnInit(): void {
  }

}
