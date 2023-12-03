import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tns-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  courseNameText: string = '';

  courses: {
    course_id: number;
    course_name: string;
    course_name_slug: string;
    course_page_url: string;
    course_page_url_short: string;
    course_site_logo_url: string;
    course_platform_name: string;
    course_logo_url: string;
    subject: string;
    course_description: string;
  }[] = [];

  selectedPlatforms: string[] = [];

  selectedSubjects: string[] = [];

  subjects = [
    'Machine Learning / AI',
    'Basic Statistics',
    'Statistical Modeling',
    'Databases',
    'Data Visualization',
    'Feature Engineering',
  ];

  platforms = ['Learning Tree', 'Edx', 'The Great Courses'];

  constructor(
    private http: HttpClient,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {
    // Page Title
    this.title.setTitle('The New Statistician | Courses');
    // Page Meta Tags
    this.meta.updateTag({
      name: 'description',
      content: `The New Statistician Courses Page`,
    });
    this.meta.updateTag({
      hid: 'twitter-title',
      name: 'twitter:title',
      content: 'The New Statistician | Courses',
    });
    this.meta.updateTag({
      name: 'twitter:url',
      content: 'https://www.thenewstatistician.com/courses',
      hid: 'twitter-url',
    });
    this.meta.updateTag({
      hid: 'twitter-title',
      name: 'twitter:title',
      content: 'The New Statistician | Courses',
    });
    this.meta.updateTag({
      hid: 'twitter-description',
      name: 'twitter:description',
      content: 'The New Statistician | Courses',
    });
    this.meta.updateTag({
      hid: 'twitter-image',
      name: 'twitter:image',
      content: environment.spaUrl + '/assets/imgs/logo_white_no_border.png',
    });

    this.meta.updateTag({
      hid: 'og:title',
      property: 'og:title',
      content: 'The New Statistician | Courses',
    });
    this.meta.updateTag({
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.thenewstatistician.com/courses',
    });
    this.meta.updateTag({
      hid: 'og:description',
      property: 'og:description',
      content: 'The New Statistician | Courses',
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
      .get<any>(environment.apiUrl + '/courses/default/list')
      .subscribe((data) => {
        this.courses = data;
        console.log('Data Fetch for default Courses List');
      });
  }

  selectAll() {
    console.log('Select all');
  }

  searchCouseName() {
    this.http
      .get<any>(environment.apiUrl + '/courses/search/course', {
        params: { name: this.courseNameText },
      })
      .subscribe((data) => {
        console.log(data);
        this.courses = data;
      });
  }

  selectPlatform() {
    this.http
      .get<any>(environment.apiUrl + '/courses/search/platform', {
        params: { platform: this.selectedPlatforms },
      })
      .subscribe((data) => {
        console.log(this.selectedPlatforms);
        this.courses = data;
      });
  }

  selectSubject() {
    this.http
      .get<any>(environment.apiUrl + '/courses/search/subject', {
        params: { subject: this.selectedSubjects },
      })
      .subscribe((data) => {
        console.log(this.selectedSubjects);
        this.courses = data;
      });
  }
}
