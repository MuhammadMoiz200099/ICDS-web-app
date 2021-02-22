import { IScopeAndObjective } from '../typing/client/scope-objective';
import { MockDataProgramsLeft } from './home-data.constant';

export const MockDataScopeObjective: Array<IScopeAndObjective> = [
    {
        heading: 'Aims and Objective',
        paragraph: [
            "Muhammad Ali Jinnah university International Conference on Computing 2021 (MAJICC'21) is the 1st International Conference, a joint effort by the Department of Computer Science (Faculty of Computing) and The Muhammad Ali Jinnah University (MAJU). The goal of MAJICC'21 is to bring together renowned scientists and leading researchers from academia and industry at one platform with the focus of exchanging ideas on modern computing innovations, AI and Data Science, Data Preprocessing,  Computer Networks and Security, Software Engineering, data mining, data management, data security and advancement in the field of the General Computing.",
            "The research papers presenting innovative practices, result oriented frameworks, systems, tools and techniques and good general survey papers demonstrating future directions are also encouraged. Research papers depicting novel work are invited in any of the conference areas listed. Research paper will be reviewed based on the originality, quality and relevance to the scope of MAJICC'21. MAJICC'21 reviewers include national and international computer scientists, professionals from industry and world-renowned Academicians. Accepted research papers will be indexed at the IEEE Xplore Digital Library."
        ]
    },
    {
        heading: 'Scope',
        paragraph: ['With the mission to provide the premier forum for advancement, education, and adoption of the latest research trends and "technology" from all types of fields in computers and networks of computers in Pakistan and following the footsteps of many educational institutions around the world, MAJU is proud to announce the first-ever “IEEE - Mohammad Ali Jinnah university International Conference on Computing", where renowned experts will share the stage provided by MAJU to illuminate the minds of up-and-coming cutting edge research and application of computer science, with their knowledge of the field, in an effort to jump start the software industry in Pakistan']
    },
    {
        heading: 'Conference Areas',
        paragraph: ['The topics of the conference include, but are not limited to, the following areas.'],
        // listOfParagraph: [
        //     "Data Preprocessing",
        //     "Data Visualization",
        //     "Distributed and Parallel Computing",
        //     "Ethics and law for Data Science",
        //     "Curriculum and Teaching of Data Science",
        //     "Machine Learning & Data Analytics",
        //     "Data Storage and Retrieval",
        //     "Blockchain and its applications",
        //     "Data Science Applications",
        // ]
        programs: MockDataProgramsLeft
    }
];

