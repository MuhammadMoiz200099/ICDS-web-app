import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('appBanner', { static: true }) private appBanner: ElementRef;
  private selectedIndex = 1;
  private imagesUrl = [
    {
      value: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("assets/posters/ezgif.com-video-to-gif.gif")'
    },
    {
      value: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("assets/posters/Front-Work-1.jpg")'
    },
    {
      value: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("assets/posters/giphy.gif")'
    },
    {
      value: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("assets/posters/evnt-video.jpg")'
    }
  ];

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.renderer.setStyle(this.appBanner.nativeElement, 'background-image', this.imagesUrl[0].value);
    interval(5000).subscribe(() => {
      if (this.selectedIndex > 3) {
        this.selectedIndex = 0;
      }
      this.renderer.setStyle(this.appBanner.nativeElement, 'background-image', this.imagesUrl[this.selectedIndex].value);
      this.selectedIndex = this.selectedIndex + 1;
    });
  }
}
