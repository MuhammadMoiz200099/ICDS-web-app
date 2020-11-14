import { Component, Input, OnInit } from '@angular/core';
import { IImportantDates } from 'src/app/typing/client/important-dates';

@Component({
  selector: 'app-important-dates',
  templateUrl: './important-dates.component.html',
  styleUrls: ['./important-dates.component.scss']
})
export class ImportantDatesComponent implements OnInit {

  @Input() dates: Array<IImportantDates>;
  @Input() showHeader: boolean;
  @Input() isDatesCenter: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dates);
  }

}
