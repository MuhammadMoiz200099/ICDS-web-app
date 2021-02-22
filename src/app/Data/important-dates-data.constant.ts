import { IImportantDates } from '../typing/client/important-dates';

export const MockDataImportantDates: Array<IImportantDates> = [
    {
        subject: 'Submission Deadline',
        date: '3rd April, 2021',
        deadlineClose: true
    },
    {
        subject: 'Announcement of Results',
        date: '21st May, 2021',
        deadlineClose: false
    },
    {
        subject: 'Camera Ready Submission Deadline',
        date: '5th June, 2021',
        deadlineClose: false
    },
    {
        subject: 'Conference Dates',
        date: '15th-17th July , 2021',
        deadlineClose: false
    }
];
