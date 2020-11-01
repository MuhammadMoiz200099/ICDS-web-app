import { Component, OnInit } from '@angular/core';
import { MockDataTechnicalCommitte } from 'src/app/Data/technical-organizing-committee-data.constant';
import { ITechnicalOrganizingCommittee } from 'src/app/typing/client/technical-organizing-data';

@Component({
  selector: 'app-technical-program-committee',
  templateUrl: './technical-program-committee.component.html',
  styleUrls: ['./technical-program-committee.component.scss']
})
export class TechnicalProgramCommitteeComponent implements OnInit {

  public technicalCommitteData: ITechnicalOrganizingCommittee = MockDataTechnicalCommitte;

  constructor() { }

  ngOnInit(): void {
  }

}
