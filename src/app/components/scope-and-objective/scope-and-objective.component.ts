import { Component, OnInit } from '@angular/core';
import { MockDataInformationScopeObjective, MockDataScopeObjective } from 'src/app/Data/scope-and-object-date.constant';
import { IScopeAndObjective } from 'src/app/typing/client/scope-objective';

@Component({
  selector: 'app-scope-and-objective',
  templateUrl: './scope-and-objective.component.html',
  styleUrls: ['./scope-and-objective.component.scss']
})
export class ScopeAndObjectiveComponent implements OnInit {

  public headerData: Array<IScopeAndObjective> = MockDataScopeObjective;
  public cardData: Array<IScopeAndObjective> = MockDataInformationScopeObjective;

  constructor() { }

  ngOnInit(): void {
  }

}
