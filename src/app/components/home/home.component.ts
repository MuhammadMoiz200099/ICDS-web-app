import { Component, OnInit } from '@angular/core';
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

  public importantDate: Array<IImportantDates> = [
    {
      subject: 'Paper Submission Deadline',
      date: '15th December 2020',
      deadlineClose: true
    },
    {
      subject: 'Acceptance Notification',
      date: '30th December 2020',
      deadlineClose: false
    },
    {
      subject: 'Camera Ready Submission',
      date: '15th January2020',
      deadlineClose: false
    },
    {
      subject: 'Early Bird Registration',
      date: '1st  January2020',
      deadlineClose: false
    },
    {
      subject: 'Late Registration',
      date: '20nd  January 2020',
      deadlineClose: false
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
