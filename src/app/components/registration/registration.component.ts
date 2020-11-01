import { Component, OnInit } from '@angular/core';
import { MockDataRegistraction, MockDataTransactionDetails } from 'src/app/Data/registration-data.constant';
import { IRegistration, ITransactionDetials } from 'src/app/typing/client/registraction';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registerationList: Array<IRegistration> = MockDataRegistraction;
  public transactionList: Array<ITransactionDetials> = MockDataTransactionDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
