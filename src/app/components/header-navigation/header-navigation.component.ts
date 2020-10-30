import { Component } from '@angular/core';
import { INavigation } from 'src/app/typing/client/Navigation-bar';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})

export class HeaderNavigationComponent {

  constructor() { }

  public navbarOptions: Array<INavigation> = [
    {
      name: 'Home',
      isMoreOptions: false,
      routeLink: '',
    },
    {
      name: 'Program',
      isMoreOptions: true,
      routeLink: '',
      options: [{
        name: 'Important dates',
        routeLink: '',
      }, {
        name: 'Invited Speakers',
        routeLink: '',
      }, {
        name: 'Detailed Technical Programs',
        routeLink: '',
      }, {
        name: 'Accepted Papers',
        routeLink: '',
      }]
    },
    {
      name: 'Scopes & Objectives',
      isMoreOptions: false,
      routeLink: '',
    },
    {
      name: 'Detailed Technical Program',
      isMoreOptions: false,
      routeLink: '',
    },
    {
      name: 'Registration',
      isMoreOptions: false,
      routeLink: '',
    },
    {
      name: 'Venue',
      isMoreOptions: false,
      routeLink: '',
    },
    {
      name: 'Committees',
      isMoreOptions: true,
      routeLink: '',
      options: [{
        name: 'Organizing Committee',
        routeLink: '',
      }, {
        name: 'Technical Program Committee',
        routeLink: '',
      }]
    },
    {
      name: 'Sponsors',
      isMoreOptions: false,
      routeLink: '',
    },
    {
      name: 'Contact',
      isMoreOptions: false,
      routeLink: '',
    }
  ];

}
