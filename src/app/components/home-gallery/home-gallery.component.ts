import { Component, OnInit } from '@angular/core';
import { IImages } from 'src/app/typing/client/image';
import { MockDataHomeGallery } from 'src/app/Data/home-gallery-data.constant';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss']
})
export class HomeGalleryComponent implements OnInit {

  public facultyGallery: Array<IImages> = MockDataHomeGallery;

  constructor() { }

  ngOnInit(): void {
  }

}
