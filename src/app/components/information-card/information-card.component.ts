import { Component, Input, OnInit } from '@angular/core';
import { IScopeAndObjective } from 'src/app/typing/client/scope-objective';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent implements OnInit {

  @Input() cardData: Array<IScopeAndObjective>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cardData);
  }

}
