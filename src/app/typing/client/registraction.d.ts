export interface IRegistration {
    heading: string;
    table_cofig: Array<RegRow>;
}

export interface RegRow {
    row: Array<RegDetails>;
}

export interface RegDetails {
    text: string;
    isBold: boolean;
}

export interface ITransactionDetials {
    heading: string;
    currency: string;
    title: string;
    account_number: string;
    iban: string;
    bank_name: string;
    branch_name: string;
    city: string;
}