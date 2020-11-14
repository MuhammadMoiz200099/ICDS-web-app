import { IImportantDates } from '../typing/client/important-dates';

export const MockDataImportantDates: Array<IImportantDates> = [
    {
        subject: 'Submission Deadline',
        date: '25th Nov, 2020',
        deadlineClose: true
    },
    {
        subject: 'Notification Date',
        date: '25th Nov, 2020',
        deadlineClose: false
    },
    {
        subject: 'Camera Ready Submission Deadline',
        date: '10th Jan, 2021',
        deadlineClose: false
    },
    {
        subject: 'Registration Deadline',
        date: '9-10th Feb , 2021',
        deadlineClose: false
    }
];
