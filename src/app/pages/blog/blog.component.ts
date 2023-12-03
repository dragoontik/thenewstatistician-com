import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tns-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  showLoading: boolean = true;

  blogArticles: {
    blog_title: string;
    blog_url: string;
    blog_id: number;
    subject: string;
    publish_date: Date;
    blog_intro: string;
    blog_image: string;
  }[] = [];

  titleText: string = '';

  selectedTopics: string[] = [];

  subjects: string[] = [
    'Machine Learning / AI',
    'Basic Statistics',
    'Statistical Modeling',
    'Clustering',
    // 'Feature Engineering',
  ];

  constructor(
    private http: HttpClient,
    private meta: Meta,
    private title: Title
  ) {
    // Page Title
    this.title.setTitle('The New Statistician | Blogs');
    // Page Meta Tags
    this.meta.updateTag({
      name: 'description',
      content: `The New Statistician Blog Page`,
    });
    this.meta.updateTag({
      hid: 'twitter-title',
      name: 'twitter:title',
      content: 'The New Statistician | Blog',
    });
    this.meta.updateTag({
      name: 'twitter:url',
      content: 'https://www.thenewstatistician.com/blog',
      hid: 'twitter-url',
    });
    this.meta.updateTag({
      hid: 'twitter-title',
      name: 'twitter:title',
      content: 'The New Statistician | Blog',
    });
    this.meta.updateTag({
      hid: 'twitter-description',
      name: 'twitter:description',
      content: 'The New Statistician | Blog',
    });
    this.meta.updateTag({
      hid: 'twitter-image',
      name: 'twitter:image',
      content: environment.spaUrl + '/assets/imgs/logo_white_no_border.png',
    });

    this.meta.updateTag({
      hid: 'og:title',
      property: 'og:title',
      content: 'The New Statistician | Blog',
    });
    this.meta.updateTag({
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.thenewstatistician.com/blog',
    });
    this.meta.updateTag({
      hid: 'og:description',
      property: 'og:description',
      content: 'The New Statistician | Blog',
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
    // Update Tags
    /* This Line of code updates meta tags!!! */
    // this.meta.updateTag({name: 'description', content: 'Foo is good'});

    // Request default List blog articles
    this.http
      .get<any>(environment.apiUrl + '/blogs/default/list')
      .subscribe((data) => {
        this.blogArticles = data;
        console.log('Data Fetch for default Blogs List');
      });
  }

  makeSelection() {
    this.titleText = '';
    console.log('Selection Made');
    console.log(this.selectedTopics);
    this.http
      .get<any>(environment.apiUrl + '/blogs/search/subject', {
        params: { subjects: this.selectedTopics },
      })
      .subscribe((data) => {
        console.log(data);
        this.blogArticles = data;
      });
  }

  searchBlogByTitle() {
    this.selectedTopics = [];
    console.log('Searching for Article');
    this.http
      .get<any>(environment.apiUrl + '/blogs/search/title', {
        params: { title: this.titleText },
      })
      .subscribe((data) => {
        this.blogArticles = data;
      });
  }
}
