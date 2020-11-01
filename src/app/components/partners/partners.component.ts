import { Component, OnInit } from '@angular/core';
import { ISpounsers } from 'src/app/typing/client/spounser';
import { MockDataSounsers } from './../../Data/spounsers.constant';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  public spounsersList: Array<ISpounsers> = MockDataSounsers;

  constructor() { }

  ngOnInit(): void {
  }

}
