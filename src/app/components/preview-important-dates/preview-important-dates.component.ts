import { Component, OnInit } from '@angular/core';
import { MockDataImportantDates } from 'src/app/Data/important-dates-data.constant';
import { IImportantDates } from 'src/app/typing/client/important-dates';

@Component({
  selector: 'app-preview-important-dates',
  templateUrl: './preview-important-dates.component.html',
  styleUrls: ['./preview-important-dates.component.scss']
})
export class PreviewImportantDatesComponent implements OnInit {

  public importantDate: Array<IImportantDates> = MockDataImportantDates;
  constructor() { }

  ngOnInit(): void {
  }

}
