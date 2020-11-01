import { IRegistration, ITransactionDetials } from '../typing/client/registraction';

export const MockDataRegistraction: Array<IRegistration> = [
    {
        heading: 'Participation Registration Details',
        table_cofig: [
            {
                row: [
                    {
                        text: 'Conference Participation Fee',
                        isBold: true,
                    },
                    {
                        text: 'Rs 5000',
                        isBold: false,
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Including Gala Dinner',
                        isBold: false,
                    },
                    {
                        text: '',
                        isBold: false,
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Conference Participation Fee',
                        isBold: true,
                    },
                    {
                        text: 'Rs 3500',
                        isBold: false,
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Excluding Gala Dinner',
                        isBold: false,
                    },
                    {
                        text: '',
                        isBold: false,
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Tutorials Day',
                        isBold: true,
                    },
                    {
                        text: 'Rs 1500',
                        isBold: false,
                    }
                ]
            },
            {
                row: [
                    {
                        text: '20th Feb Only',
                        isBold: false,
                    },
                    {
                        text: '',
                        isBold: false,
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Tutorials Day',
                        isBold: true,
                    },
                    {
                        text: 'Rs 3000',
                        isBold: false,
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Including Gala Dinner',
                        isBold: false,
                    },
                    {
                        text: '',
                        isBold: false,
                    }
                ]
            }
        ]
    },
    {
        heading: 'Paper Registration Details',
        table_cofig: [
            {
                row: [
                    {
                        text: 'IEEE Members',
                        isBold: true,
                    },
                    {
                        text: '',
                        isBold: true
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'International Authors',
                        isBold: false
                    },
                    {
                        text: '200 USD',
                        isBold: false
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Local Professionals Authors',
                        isBold: false
                    },
                    {
                        text: '7000 PKR',
                        isBold: false
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Local Student Authors',
                        isBold: false
                    },
                    {
                        text: '5000 PKR',
                        isBold: false
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Non IEEE-Member',
                        isBold: true
                    },
                    {
                        text: '',
                        isBold: true
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'International Authors',
                        isBold: false
                    },
                    {
                        text: '220 USD',
                        isBold: false
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Local Professionals Authors',
                        isBold: false
                    },
                    {
                        text: '10000 PKR',
                        isBold: false
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'Local Student Authors',
                        isBold: false
                    },
                    {
                        text: '6000 PKR',
                        isBold: false
                    }
                ]
            },
            {
                row: [
                    {
                        text: 'UOL Authors',
                        isBold: true
                    },
                    {
                        text: 'FREE',
                        isBold: true
                    }
                ]
            },
        ]
    }
];

export const MockDataTransactionDetails: Array<ITransactionDetials> = [
    {
        heading: 'Account no. for conference fee payment in',
        currency: 'Pak Rupee',
        title: 'Muhammad Ali Jinnah University',
        account_number: '00*******************',
        iban: '00*******************',
        bank_name: 'ALLIED BANK LIMITED',
        branch_name: 'LAL KOTI, Branch (0191)',
        city: 'KARACHI',
    },
    {
        heading: 'Account no. for conference fee payment in',
        currency: 'US Dollar',
        title: 'Muhammad Ali Jinnah University',
        account_number: '00*******************',
        iban: '00*******************',
        bank_name: 'SINDH ISLAMIC BANK',
        branch_name: 'LAL KOTI, Branch (0191)',
        city: 'KARACHI',
    }
];
