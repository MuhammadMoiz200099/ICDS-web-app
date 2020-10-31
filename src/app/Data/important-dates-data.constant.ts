import { IImportantDates } from '../typing/client/important-dates';

export const MockDataImportantDates: Array<IImportantDates> = [
    {
        subject: 'Paper Submission Deadline',
        date: '15th December 2020',
        deadlineClose: true
    },
    {
        subject: 'Acceptance Notification',
        date: '30th December 2020',
        deadlineClose: false
    },
    {
        subject: 'Camera Ready Submission',
        date: '15th January2020',
        deadlineClose: false
    },
    {
        subject: 'Early Bird Registration',
        date: '1st  January2020',
        deadlineClose: false
    },
    {
        subject: 'Late Registration',
        date: '20nd  January 2020',
        deadlineClose: false
    },
];
