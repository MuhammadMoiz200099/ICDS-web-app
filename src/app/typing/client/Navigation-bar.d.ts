export interface INavigation {
    name: string;
    isMoreOptions: boolean;
    routeLink: string;
    options?: Array<{
        name: string;
        routeLink: string;
    }>;
}