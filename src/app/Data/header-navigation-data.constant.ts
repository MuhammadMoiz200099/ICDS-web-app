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
        routeLink: '/programs',
        disabled: false,
        options: [{
            name: 'Scopes & Objectives',
            routeLink: '/scope-and-objective',
            disabled: true
        }, {
            name: 'Invited Speakers',
            routeLink: '/programs/invited-speakers',
            disabled: false
        }, {
            name: 'Important dates',
            routeLink: '/programs',
            disabled: false
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
        name: 'Proceedings',
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
