import { Component, OnInit } from '@angular/core';
import { IAcceptedPaper, IBestPaper } from 'src/app/typing/client/accepted-paper';
import { MockupDataBestPapers, MockDataAcceptedPaper } from './../../Data/accepted-paper-data.contant';

@Component({
  selector: 'app-accepted-papers',
  templateUrl: './accepted-papers.component.html',
  styleUrls: ['./accepted-papers.component.scss']
})
export class AcceptedPapersComponent implements OnInit {

  public bestPapersList: Array<IBestPaper> = MockupDataBestPapers;
  public acceptedPapersList: Array<IAcceptedPaper> = MockDataAcceptedPaper;

  constructor() { }

  ngOnInit(): void {
  }

}
