export interface INavigation {
    name: string;
    isMoreOptions: boolean;
    routeLink: string;
    disabled: boolean;
    options?: Array<{
        name: string;
        routeLink: string;
        disabled: boolean;
        isPDF: boolean;
    }>;
}