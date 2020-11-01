import { Component, OnInit } from '@angular/core';
import { MockVenueData } from 'src/app/Data/venue-gallery-data.constant';
import { IImages } from 'src/app/typing/client/image';

@Component({
  selector: 'app-venue-gallery',
  templateUrl: './venue-gallery.component.html',
  styleUrls: ['./venue-gallery.component.scss']
})
export class VenueGalleryComponent implements OnInit {

  public karachiGallery: Array<IImages> = MockVenueData;

  constructor() { }

  ngOnInit(): void {
  }

}
