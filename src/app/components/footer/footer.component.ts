import { Component, OnInit } from '@angular/core';
import { MockDataFooterImages } from 'src/app/Data/footer-images.data.constant';
import { IImages } from 'src/app/typing/client/image';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentYear = new Date().getFullYear();
  public Spounsers: Array<IImages> = MockDataFooterImages;
  constructor() { }

  ngOnInit(): void {
  }

}
