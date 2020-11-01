import { Component, OnInit } from '@angular/core';
import { MockDataInvitedSpeakers } from 'src/app/Data/invited-speakers-data.constant';
import { IInvitedSpeakers } from 'src/app/typing/client/invited-speaker';

@Component({
  selector: 'app-invited-speakers',
  templateUrl: './invited-speakers.component.html',
  styleUrls: ['./invited-speakers.component.scss']
})
export class InvitedSpeakersComponent implements OnInit {

  public speakers: Array<IInvitedSpeakers> = MockDataInvitedSpeakers;

  constructor() { }

  ngOnInit(): void {
  }

}
