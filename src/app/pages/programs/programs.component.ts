import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tns-programs',
  templateUrl: './programs.component.html'
})
export class ProgramsComponent implements OnInit {


  programs: {
    program_id: number;
    program_name: string;
    program_name_slug: string;
    program_site_url: string;
    program_page_url_short: string;
    program_site_logo: string;
    program_description: string;
  }[] = [];


  constructor(
    private http: HttpClient,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {
    this.title.setTitle('The New Statitsician | Programs');

 // Page Meta Tags
 this.meta.updateTag({
  name: 'description',
  content: `The New Statistician Programs Page`,
});
this.meta.updateTag({
  hid: 'twitter-title',
  name: 'twitter:title',
  content: 'The New Statistician | Programs',
});
this.meta.updateTag({
  name: 'twitter:url',
  content: 'https://www.thenewstatistician.com/programs',
  hid: 'twitter-url',
});
this.meta.updateTag({
  hid: 'twitter-title',
  name: 'twitter:title',
  content: 'The New Statistician | Programs',
});
this.meta.updateTag({
  hid: 'twitter-description',
  name: 'twitter:description',
  content: 'The New Statistician | Programs',
});
this.meta.updateTag({
  hid: 'twitter-image',
  name: 'twitter:image',
  content: environment.spaUrl + '/assets/imgs/logo_white_no_border.png',
});

this.meta.updateTag({
  hid: 'og:title',
  property: 'og:title',
  content: 'The New Statistician | Programs',
});
this.meta.updateTag({
  hid: 'og:url',
  property: 'og:url',
  content: 'https://www.thenewstatistician.com/programs',
});
this.meta.updateTag({
  hid: 'og:description',
  property: 'og:description',
  content: 'The New Statistician | Programs',
});

this.meta.updateTag({
  hid: 'og:image',
  property: 'og:image',
  content: environment.spaUrl + '/assets/imgs/logo_white_no_border.png',
});
this.meta.updateTag({
  hid: 'og:type',
  property: 'og:type',
  content: 'posts',
});
   }





  ngOnInit(): void {
    this.http
    .get<any>(environment.apiUrl + '/programs/default/list')
    .subscribe((data) => {
      this.programs = data;
      console.log('Data Fetch for default Courses List');
    });
  }



  
  


}
