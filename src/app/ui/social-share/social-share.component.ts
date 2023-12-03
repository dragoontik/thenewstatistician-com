import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tns-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent implements OnInit {
  @Input() shareUrl: string = '';
  @Input() shareTitle: string = '';
  @Input() shareTags: string = '';
  @Input() shareItemName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
