import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tns-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.scss']
})
export class SocialBarComponent implements OnInit {

  twitterUrl = "https://twitter.com/TheNewStat1";

  facebookUrl = "https://www.facebook.com/TheNewStat1"

  youtubeUrl = "https://www.youtube.com/channel/UCcPnyv1HXYEGxFsP6Z4P7yQ"

  instagramUrl = "https://www.instagram.com/thenewstat1/"

  constructor() { }

  ngOnInit(): void {
  }

}

