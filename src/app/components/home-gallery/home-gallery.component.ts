import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss']
})
export class HomeGalleryComponent implements OnInit {

  public facultyGallery: Array<{ img: string }> = [
    {
      img: './../../../assets/img/faculty-gallery/dean_foc-189x189.jpg',
    },
    {
      img: './../../../assets/img/faculty-gallery/dean_foc1-200x200.png',
    },
    {
      img: './../../../assets/img/faculty-gallery/raazi-200x200.png',
    },
    {
      img: './../../../assets/img/faculty-gallery/dr_tafseer-200x200.png',
    },
    {
      img: './../../../assets/img/faculty-gallery/yaasin-200x200.png',
    },
    {
      img: './../../../assets/img/faculty-gallery/touseef-200x200.png',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
