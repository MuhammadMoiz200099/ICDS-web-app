import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentYear = new Date().getFullYear();
  public Spounsers = [
    {
      img: './../../../assets/img/maju-logo2.png'
    },
    {
      img: './../../../assets/img/maju-logo2.png'
    },
    {
      img: './../../../assets/img/maju-logo2.png'
    },
    {
      img: './../../../assets/img/maju-logo2.png'
    },
    {
      img: './../../../assets/img/maju-logo2.png'
    },
    {
      img: './../../../assets/img/maju-logo2.png'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
