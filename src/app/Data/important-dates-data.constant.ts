import { IImportantDates } from '../typing/client/important-dates';

export const MockDataImportantDates: Array<IImportantDates> = [
    {
        subject: 'Submission Deadline',
        date: '20th Dec, 2020',
        deadlineClose: true
    },
    {
        subject: 'Notification Date',
        date: '15th Jan, 2021',
        deadlineClose: false
    },
    {
        subject: 'Camera Ready Submission Deadline',
        date: '25th Jan, 2021',
        deadlineClose: false
    },
    {
        subject: 'Conference Dates',
        date: '9-10th Feb , 2021',
        deadlineClose: false
    }
];
