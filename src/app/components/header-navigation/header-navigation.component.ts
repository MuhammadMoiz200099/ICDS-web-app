import { Component } from '@angular/core';
import { MockDataHeaderNavigation } from 'src/app/Data/header-navigation-data.constant';
import { INavigation } from 'src/app/typing/client/Navigation-bar';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})

export class HeaderNavigationComponent {

  public navbarOptions: Array<INavigation> = MockDataHeaderNavigation;
  public selectedIndex: string;

  constructor() {
    this.selectedIndex = this.navbarOptions[0].name;
  }

  public navigationChange(navOptions): void {
    this.selectedIndex = navOptions.name;
  }

}
