import { Component } from '@angular/core';
import { MockDataHeaderNavigation } from 'src/app/Data/header-navigation-data.constant';
import { INavigation } from 'src/app/typing/client/Navigation-bar';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})

export class HeaderNavigationComponent {

  constructor() { }

  public navbarOptions: Array<INavigation> = MockDataHeaderNavigation;

}
