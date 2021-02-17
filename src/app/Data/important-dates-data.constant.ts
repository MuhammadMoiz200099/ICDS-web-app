import { IImportantDates } from '../typing/client/important-dates';

export const MockDataImportantDates: Array<IImportantDates> = [
    {
        subject: 'Submission Deadline',
        date: '3rd April, 2021',
        deadlineClose: true
    },
    {
        subject: 'Notification Date',
        date: '15th May, 2021',
        deadlineClose: false
    },
    {
        subject: 'Camera Ready Submission Deadline',
        date: '25th June, 2021',
        deadlineClose: false
    },
    {
        subject: 'Conference Dates',
        date: '9-10th July , 2021',
        deadlineClose: false
    }
];
