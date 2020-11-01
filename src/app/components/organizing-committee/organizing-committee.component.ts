import { Component, OnInit } from '@angular/core';
import { MockDataOrganizingCommittee } from 'src/app/Data/organizing-committee-data.constant';
import { IOrganizingCommittee } from 'src/app/typing/client/organizing-committee';

@Component({
  selector: 'app-organizing-committee',
  templateUrl: './organizing-committee.component.html',
  styleUrls: ['./organizing-committee.component.scss']
})
export class OrganizingCommitteeComponent implements OnInit {

  public organizingData: Array<IOrganizingCommittee> = MockDataOrganizingCommittee;

  constructor() { }

  ngOnInit(): void {
  }

}
