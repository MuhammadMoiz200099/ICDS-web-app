import { Component, Input, OnInit } from '@angular/core';
import { IImportantDates } from 'src/app/typing/client/important-dates';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() dates: Array<IImportantDates>;

  constructor() { }

  ngOnInit(): void {
  }

}
