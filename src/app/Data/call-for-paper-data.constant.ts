import { ICallForPaper } from '../typing/client/call-for-paper-type';

export const papersData: Array<ICallForPaper> = [
    {
        heading: 'CALL FOR PAPERS',
        breif: 'JICDS21 invites authors to submit full papers describing completed or on-going research or development in the field of Data Science. Relevant topics for the conference include, but are not limited to, the following areas:',
        points: [
            'Data Preprocessing',
            'Machine Learning & Data Analytics',
            'Data Visualization',
            'Data Storage and Retrieval',
            'Distributed and Parallel Computing',
            'Blockchain and its applications',
            'Ethics and law for Data Science',
            'Data Science Applications',
            'Curriculum and Teaching of Data Science'
        ],
        para: [
            'Papers are to be submitted in pdf format, no more than six pages in length excluding references. Please follow the given template for the the submission i.e.Word Template, Latex Template',
            'The review process will be double-blind, so authors are requested NOT to provide any names or contact details on the submitted paper. Authors should register at online-submission-link-coming-soon to submit their papers.'
        ]
    },
    {
        heading: 'Demonstrations',
        para: [
            "JICDS'19 " + 'invites proposals for exhibition of products and/or libraries related to Data Science. The proposed demo can be an academic work as well as industrial solution.',
            'The developer(s) should present a 400 to 700 word abstract describing motivation, design, significance and innovation of the proposed demo. The screenshots of input/output can be appended to the abstract.',
            'For abstract submission, register at online-submission-link-coming-soon.'
        ]
    },
    {
        heading: 'Doctoral Colloquium',
        para: [
            'JICDS21 invites PhD scholar to present their doctoral thesis work related to Data Science. It is an opportunity for the students to interact with their colleagues as well as senior researchers and academia.',
            'The doctoral scholars should submit 2 page extended abstract (+ additional pages for references) describing thesis work (related to Data Science) and its current status.',
            'For abstract submission, register at online-submission-link-coming-soon.'
        ]
    }
];

