import { INavigation } from '../typing/client/Navigation-bar';

export const MockDataHeaderNavigation: Array<INavigation> = [
    {
        name: 'Home',
        isMoreOptions: false,
        routeLink: '',
    },
    {
        name: 'Program',
        isMoreOptions: true,
        routeLink: '/important-dates',
        options: [{
            name: 'Important dates',
            routeLink: '/important-dates',
        }, {
            name: 'Invited Speakers',
            routeLink: '/invited-speakers',
        }, {
            name: 'Detailed Technical Programs',
            routeLink: '/detailed-technical-program',
        }, {
            name: 'Accepted Papers',
            routeLink: '/accepted-paper',
        }]
    },
    {
        name: 'Scopes & Objectives',
        isMoreOptions: false,
        routeLink: '/scope-and-objective',
    },
    {
        name: 'Detailed Technical Program',
        isMoreOptions: false,
        routeLink: '/detailed-technical-program',
    },
    {
        name: 'Registration',
        isMoreOptions: false,
        routeLink: '/registration',
    },
    {
        name: 'Venue',
        isMoreOptions: false,
        routeLink: '/program-venue',
    },
    {
        name: 'Committees',
        isMoreOptions: true,
        routeLink: '/organizing-committee',
        options: [{
            name: 'Organizing Committee',
            routeLink: '/organizing-committee',
        }, {
            name: 'Technical Program Committee',
            routeLink: '/technical-program-committee',
        }]
    },
    {
        name: 'Sponsors',
        isMoreOptions: false,
        routeLink: '/partners',
    },
    {
        name: 'Contact',
        isMoreOptions: false,
        routeLink: '/contact',
    }
];
