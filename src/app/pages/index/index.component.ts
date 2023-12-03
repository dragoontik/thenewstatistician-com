
import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'tns-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit  {

  tabIndex: number = 0;

  featuredCourses: {
    course_id: number,
    course_name: string,
    course_name_slug: string,
    course_page_url: string,
    course_page_url_short: string,
    course_site_logo_url: string,
    course_platform_name: string,
    course_logo_url: string,
    subject: string,
    course_description: string
  }[] = [];

  constructor(private router: Router, private http: HttpClient,
    private meta: Meta, private title: Title) {



      this.title.setTitle('The New Statistician | How Modern Statistics Should Be.');

      this.meta.addTags([
        {name: 'description', content: `Search through The New Statistician\'s currated Catelog of Data Science, Statistics and 
        Artificial Intelligence courses and blog articles`},
        { name: 'keywords', content: 'Data, Data Science, Statistics, Machine Learning, Artificial Intelligence' },
             // Twitter SEO and Formatting
             {
              name: "twitter:url",
              content: 'https://www.thenewstatistician.com',
              hid: "twitter-url",
            },
            {
              hid: "twitter-title",
              name: "twitter:title",
              content: "The New Statistician Site",
            },
            {
              hid: "twitter-description",
              name: "twitter:description",
              content: 'The New Statistician Site',
            },
            {
              hid: "twitter-image",
              name: "twitter:image",
              content: environment.spaUrl + '/assets/imgs/logo_white_no_border.png',
            },
            // Facebook SEO
            {
              hid: "og:title",
              property: "og:title",
              content: "The New Statistician Site",
            },
            {
              hid: "og:url",
              property: "og:url",
              content: 'https://www.thenewstatistician.com',
            },
            {
              hid: "og:description",
              property: "og:description",
              content: "The New Statistician Site",
            },
            {
              hid: "og:image",
              property: "og:image",
              content: environment.spaUrl + '/assets/imgs/logo_white_no_border.png',
            },
            { hid: "og:type", property: "og:type", content: "posts" },
      ]);
     }

  ngOnInit(): void {
    this.router.navigate([this.router.url]);
    console.log("Navigation comp:");
    console.log(this.router.url);

    // Fetch Random Featured Courses
    this.http.get<any>(environment.apiUrl + '/courses/featured')
    .subscribe(data => {
      this.featuredCourses = data;
      console.log('Data Fetch for default Courses List');
    });


    // Fetch Random Featured Books ... (Future Planned)
  }

}
