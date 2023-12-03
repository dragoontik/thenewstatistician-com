import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import slugify from 'slugify';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tns-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  twitterUrl = 'https://twitter.com/TheNewStat1';

  facebookUrl = 'https://www.facebook.com/TheNewStat1';

  youtubeUrl = 'https://www.youtube.com/channel/UCcPnyv1HXYEGxFsP6Z4P7yQ';

  instagramUrl = 'https://www.instagram.com/thenewstat1/';

  blogArticleDetails: {
    blog_id: number;
    blog_title: string;
    blog_body: string;
    publish_date: Date;
    blog_url: string;
    blog_image: string
  };

  blogHtmlBody: SafeHtml | undefined;

  blogIdValueString: string = '';

  blogTitleSlug: string = '';

  blogTitle: string = '';

  constructor(
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {
    this.blogArticleDetails = {
      blog_id: 0,
      blog_body: '',
      blog_title: '',
      publish_date: new Date(),
      blog_url: '',
      blog_image: ''
    };
  }

  ngOnInit(): void {
    console.log('Check active route info');
    const routeParams = this.activeRoute.params.subscribe((data) => {
      this.blogIdValueString = data['id'];
      this.blogTitleSlug = slugify(data['title_slug'], {
        lower: true,
        replacement: '-',
        trim: true,
      });
    });

    console.log('Values for finding blog data');
    console.log(this.blogIdValueString);
    console.log(this.blogTitleSlug);

    console.log(this.blogTitleSlug);
    const resp = this.http
      .get<any>(environment.apiUrl + '/blogs/article/data', {
        params: {
          id: Number(this.blogIdValueString),
          title_slug: this.blogTitleSlug,
        },
      })
      .subscribe((data) => {
        console.log(data['blog_title']);
        this.blogArticleDetails = data;
        // Set Page Title
        this.title.setTitle('The New Statistician | ' + data['blog_title']);

        // Page Meta Tags
        this.meta.updateTag({
          name: 'description',
          content: `The New Statistician Blog | ${data['blog_title']}`,
        });
        this.meta.updateTag({
          hid: 'twitter-title',
          name: 'twitter:title',
          content: `The New Statistician Blog | ${data['blog_title']}`,
        });
        this.meta.updateTag({
          name: 'twitter:url',
          content: `${data['blog_url']}`,
          hid: 'twitter-url',
        });
        this.meta.updateTag({
          hid: 'twitter-title',
          name: 'twitter:title',
          content: `The New Statistician Blog | ${data['blog_title']}`,
        });
        this.meta.updateTag({
          hid: 'twitter-description',
          name: 'twitter:description',
          content: `The New Statistician Blog | ${data['blog_title']}`,
        });
        this.meta.updateTag({
          hid: 'twitter-image',
          name: 'twitter:image',
          content: `${data['blog_image']}`,
        });

        this.meta.updateTag({
          hid: 'og:title',
          property: 'og:title',
          content: `The New Statistician Blog | ${data['blog_title']}`,
        });
        this.meta.updateTag({
          hid: 'og:url',
          property: 'og:url',
          content: `${data['blog_url']}`,
        });
        this.meta.updateTag({
          hid: 'og:description',
          property: 'og:description',
          content: `The New Statistician Blog | ${data['blog_title']}`,
        });

        this.meta.updateTag({
          hid: 'og:image',
          property: 'og:image',
          content: `${data['blog_image']}`,
        });
        this.meta.updateTag({
          hid: 'og:type',
          property: 'og:type',
          content: 'posts',
        });
        this.blogHtmlBody = this.sanitizer.bypassSecurityTrustHtml(
          this.blogArticleDetails.blog_body
        );
      });
  }
}
