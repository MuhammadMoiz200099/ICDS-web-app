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
            disabled: false,
            isPDF: false
        }, {
            name: 'Invited Speakers',
            routeLink: '/programs/invited-speakers',
            disabled: false,
            isPDF: false
        }, {
            name: 'Important dates',
            routeLink: '/programs',
            disabled: false,
            isPDF: false
        },
        {
            name: 'Proceedings',
            routeLink: 'assets/Proceedings.pdf',
            disabled: false,
            isPDF: true
        }]
    },
    {
        name: 'Venue',
        isMoreOptions: false,
        routeLink: '/program-venue',
        disabled: false
    },
    {
        name: 'Committee',
        routeLink: '/oversight-committee',
        isMoreOptions: true,
        disabled: false,
        options: [{
            name: 'OverSight Committee',
            routeLink: '/oversight-committee',
            disabled: false,
            isPDF: false
        }, {
            name: 'Organizing Committees',
            routeLink: '/organizing-committee',
            disabled: false,
            isPDF: false
        }, {
            name: 'Technical Committees',
            routeLink: '/technical-committee',
            disabled: false,
            isPDF: false
        }]
    },
    {
        name: 'Registration',
        isMoreOptions: false,
        routeLink: '/registration',
        disabled: true
    },
    {
        name: 'Contact',
        isMoreOptions: false,
        routeLink: '/contact',
        disabled: false
    }
];
