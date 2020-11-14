import { Component, OnInit } from '@angular/core';
import { papersData } from 'src/app/Data/call-for-paper-data.constant';
import { MockDataImportantDates } from 'src/app/Data/important-dates-data.constant';
import { ICallForPaper } from 'src/app/typing/client/call-for-paper-type';
import { IImportantDates } from 'src/app/typing/client/important-dates';

@Component({
  selector: 'app-call-for-paper',
  templateUrl: './call-for-paper.component.html',
  styleUrls: ['./call-for-paper.component.scss']
})
export class CallForPaperComponent implements OnInit {

  public importantDate: Array<IImportantDates> = MockDataImportantDates;
  public data: Array<ICallForPaper> = papersData;

  constructor() { }

  ngOnInit(): void {
  }

}
