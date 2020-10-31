import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-gallery',
  templateUrl: './venue-gallery.component.html',
  styleUrls: ['./venue-gallery.component.scss']
})
export class VenueGalleryComponent implements OnInit {

  public karachiGallery: Array<{ img: string }> = [
    { img: './../../../assets/img/karachi/maju.png' },
    { img: './../../../assets/img/karachi/kpt.jpg' },
    { img: './../../../assets/img/karachi/Karachi.jpg' },
    { img: './../../../assets/img/karachi/ii-chundigar.jpg' },
    { img: './../../../assets/img/karachi/impress-market.png' },
    { img: './../../../assets/img/karachi/teen-talwar.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
