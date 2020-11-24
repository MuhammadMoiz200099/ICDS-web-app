import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {
  public imageObject: Array<any> = [{
    image: 'assets/poster.jpeg',
    alt: 'alt of image'
  }, {
    image: 'assets/headerban.png',
    alt: 'alt of image'
  }, {
    image: 'assets/maju.jfif',
    alt: 'alt of image'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
