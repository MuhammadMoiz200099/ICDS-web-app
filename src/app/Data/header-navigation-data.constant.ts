import { INavigation } from '../typing/client/Navigation-bar';

export const MockDataHeaderNavigation: Array<INavigation> = [
    {
        name: 'Home',
        isMoreOptions: false,
        routeLink: '',
        disabled: false
    },
    {
        name: 'Call for Paper',
        isMoreOptions: false,
        routeLink: '/call-for-paper',
        disabled: false
    },
    {
        name: 'Program',
        isMoreOptions: true,
        routeLink: '/important-dates',
        disabled: false,
        options: [{
            name: 'Important dates',
            routeLink: '/important-dates',
            disabled: false
        }, {
            name: 'Invited Speakers',
            routeLink: '/invited-speakers',
            disabled: false
        }, {
            name: 'Scopes & Objectives',
            routeLink: '/scope-and-objective',
            disabled: true
        }, {
            name: 'Registration',
            routeLink: '/registration',
            disabled: true
        }]
    },
    {
        name: 'Venue',
        isMoreOptions: false,
        routeLink: '/program-venue',
        disabled: false
    },
    {
        name: 'Committees',
        isMoreOptions: false,
        routeLink: '/organizing-committee',
        disabled: false
    },
    {
        name: 'Accepted Papers',
        isMoreOptions: false,
        routeLink: '/accepted-paper',
        disabled: false
    },
    {
        name: 'Contact',
        isMoreOptions: false,
        routeLink: '/contact',
        disabled: false
    }
];
