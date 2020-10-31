import { Component, OnInit } from '@angular/core';
import { MockDataImportantDates } from 'src/app/Data/important-dates-data.constant';
import { IImportantDates } from 'src/app/typing/client/important-dates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public programsLeftUl = [
    'Data Preprocessing',
    'Data Visualization',
    'Distributed and Parallel Computing',
    'Ethics and law for Data Science',
    'Curriculum and Teaching of Data Science'
  ];
  public programsRightUl = [
    'Machine Learning & Data Analytics',
    'Data Storage and Retrieval',
    'Blockchain and its applications',
    'Data Science Applications',
  ];

  public importantDate: Array<IImportantDates> = MockDataImportantDates;

  constructor() { }

  ngOnInit(): void {
  }

}
