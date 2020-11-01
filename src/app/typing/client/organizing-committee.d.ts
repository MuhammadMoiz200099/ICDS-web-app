export interface IOrganizingCommittee {
    heading: string;
    program_details: Array<IPrograms>
}

export interface IPrograms {
    program: string;
    instructors: string;
}