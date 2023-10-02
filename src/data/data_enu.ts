import CV from "../model/resume";

const data_enu: CV = new CV();
data_enu.local = {
    lang: 'en',
    Phone: 'Phone',
    Email: 'Email',
    LinkedIn: 'LinkedIn',
    profile: 'profile',
    Web: 'Web',
    Address: 'Address',
    Experience: 'Experience',
    Education: 'Education',
    Languages: 'Languages',
    Projects: 'Projects'
}
data_enu.firstName = "Ilya";
data_enu.middleName = "";
data_enu.lastName = "Onyanov";
data_enu.dateOfBirth = new Date('1986-04-16');
data_enu.jobTitle = "Fullstack developer";
data_enu.contactInfo.email = "onyanov@gmail.com";
data_enu.contactInfo.phone = "+374 43292406";
data_enu.contactInfo.linkedIn = "https://www.linkedin.com/in/ilya-onyanov-b81561178/";
data_enu.contactInfo.address = "Armenia, Yerevan";
data_enu.contactInfo.website = "www.onyanov.net";
data_enu.description = ["I have extensive experience in developing in different languages using Waterfall and Agile methodologies (KANBAN and SCRUM).",
    "I worked in small (1-3 people) and large (~300 people) teams in different position: support specialist, analyst, developer, team-lead, project manager.",
    "For a long time I led the development teams and the department of Siebel CRM.",
    "Currently, I decided to change my profession and do FullStack development.",
    "To change the specialty, I implemented several pet-projects. To systematize and expand knowledge, I underwent additional training."];
data_enu.photo = "photo";

data_enu.education.push({
    startDt: new Date('2003-07-01'), endDt: new Date('2008-07-01'),
    degree: "IT specialist", description: "Information technology in jurisprudence",
    institution: "Volgograd State University", location: "Volgograd"
})

data_enu.expiriense.push({
    company: "Volma",
    title: "Software developer",
    startDt: new Date('2007-05-21'),
    endDt: new Date('2009-01-21'),
    location: "Volgograd",
    description: ["I was developing corporate system by VB6.",
        "I participated in migration project to .NET Framework 2.0 and on next step to .NET Framework 3.5.",
        "I was 3-line support and was writing user instructions.",
        "I was developing local support subsystem, " +
        "access subsystem and report subsystem (dynamic SQL), integrated in main solution."],
    tags: ["MS SQL", "C#", "VB6"]
})
data_enu.expiriense.push({
    company: "Lukoil-Inform",
    title: "Software developer (support)",
    startDt: new Date('2009-01-21'),
    endDt: new Date('2009-12-31'),
    location: "Volgograd",
    description: ["I was supporting corporate solution on Dephi 2006 with COM+.",
        "I was tuning SQL-queries in Oracle DB and MS SQL.",
        "I was writing user instructions and was developing additional programs on .NET 2.0.",
        "I was creating reports in CristalReport and MS Report."],
    tags: ["MS SQL", "Oracle", "C#", "Dephi"]
})
data_enu.expiriense.push({
    company: "Softline",
    title: "IT consultant",
    startDt: new Date('2010-01-21'),
    endDt: new Date('2011-08-10'),
    location: "Moscow",
    description: ["I was customising Oracle CRM on Demand for travel company.",
        "I was analyzing requirements and developing integration with account system (1С 7.7).",
        "I was writing developers and users instructions.",
        "I was customising SAP Business Objects for Holcim Rus.",
        "I was analyzing requirements, design solution and " +
        "writing developers and users documentation.",
        "I designed DB and OLAP Cube (MS SQL Server 2008).",
        "I was developing ETL-procedures with SAP Business Objects Data Integrator.",
        "I was creating SAP Business Objects reports and Xelsius-panel, setting portal InfoView."],
    tags: ["MS SQL", "MS OLAP", "SAP Business Objects", "ETL", "Oracle CRM on Demand"]
})
data_enu.expiriense.push({
    company: "Technoserv-Consulting",
    title: "Senior Siebel CRM developer",
    startDt: new Date('2011-08-22'),
    endDt: new Date('2013-06-26'),
    location: "Moscow",
    description: ["I was customising Siebel CRM in banks and managing developer team (10 developer)."],
    tags: ["Oracle", "Siebel CRM"]
})
data_enu.expiriense.push({
    company: "Sberbank-Technology",
    title: "Software engineer",
    startDt: new Date('2013-07-01'),
    endDt: new Date('2014-03-19'),
    location: "Moscow",
    description: ["I was developing report system in Oracle BI by data Siebel СRM.",
        "I was designing DB and developed ETL with usage PL/SQL procedures.",
        "I created reports with BI Answers.",
        "I was Third-line support."],
    tags: ["Oracle", "Oracle BI", "ETL"]
})
data_enu.expiriense.push({
    company: "Technoserv-Consulting",
    title: "Senior Siebel CRM developer",
    startDt: new Date('2014-04-18'),
    endDt: new Date('2015-04-17'),
    location: "Moscow",
    description: ["I was customising Siebel CRM in banks and solved non-standard problems."],
    tags: ["Oracle", "Siebel CRM"]
})
data_enu.expiriense.push({
    company: "BinBank",
    title: "Senior Siebel CRM developer",
    startDt: new Date('2015-04-18'),
    endDt: new Date('2015-12-20'),
    location: "Moscow",
    description: ["I was customising Siebel CRM.",
        "I was migrating solution to new interface version - OpenUI."],
    tags: ["Oracle", "Siebel CRM"]
})
data_enu.expiriense.push({
    company: "Sberbank-Technology",
    title: "Senior Software Engineer",
    startDt: new Date('2015-12-21'),
    endDt: new Date('2018-05-22'),
    location: "Moscow",
    description: ["I was designing solution base on Siebel CRM.",
        "I was managing developer team (60 person) and solving technical-problem.",
        "I was coordinating migration to Agile process. I was planning Agile and Waterfall stream synchronisation.",
        "I was developing relise delivery system (used TeamCity + bash).",
        "I was migrating to CI/CD process and central tools of company (Jenkins, Ansible, Python).."],
    tags: ["Oracle", "Siebel CRM", "TeamCity", "Ansible", "Jenkins", "CI/CD"]
})
data_enu.expiriense.push({
    company: "Uralsib",
    title: "Software Architect",
    startDt: new Date('2018-05-23'),
    endDt: new Date('2019-04-26'),
    location: "Moscow",
    description: ["I was designing solutions base on Siebel CRM.",
        "I implemented of CI/CD practices for Siebel CRM.",
        "I organized work for geo-distributed teams (5 locations from 4 companies).",
        "It turned out to switch to two-week releases instead 2 times per year."],
    tags: ["Oracle", "Siebel CRM", "CI/CD"]
})
data_enu.expiriense.push({
    company: "Freelance",
    title: "",
    startDt: new Date('2019-04-26'),
    endDt: new Date('2020-08-30'),
    location: "Moscow",
    description: ["I was designing and developing different solutions based on Siebel CRM."],
    tags: ["Oracle", "Siebel CRM"]
})
data_enu.expiriense.push({
    company: "Russian Agricultural Bank",
    title: "Head of department for CRM Systems",
    startDt: new Date('2020-09-01'),
    endDt: new Date('2022-10-30'),
    location: "Moscow",
    description: ["I was responding for retail business systems based on Siebel CRM: " +
    "Collection, Master Data Management, contact center.",
        "I organized the work of employees and contractors.",
        "I was solving technical problems."],
    tags: ["Oracle", "Siebel CRM"]
})
data_enu.expiriense.push({
    company: "Solvit.AM",
    title: "Fullstack Developer",
    startDt: new Date('2022-11-01'),
    endDt: undefined,
    location: "Yerevan",
    description: [],
    tags: []
})

data_enu.languages.push({name: "Russian", level: "Native"});
data_enu.languages.push({name: "English", level: "B1"});

data_enu.projects.push({
    name: "Personal site Sergey Agasaryan",
    source: "https://github.com/ionyanov/php_serguius.ru.git",
    link: "http://serguius.ru/",
    description: ["Developed in 2004 with use static HTML, later rewritten to PHP using phpSecurityAdmin and phpMysqlConnection libraries.",
        "Database: MySQL.",
        "Design by customer.",
        "I developed about 30 different sites with a similar architecture during 2005-2010."],
})
data_enu.projects.push({
    name: "Personal site on PHP",
    source: "https://github.com/ionyanov/php_onyanov.net",
    link: "http://onyanov.net/php/",
    description: ["Personal page by PHP. A template was taken from open sources as static HTML and modified to be able to fill from the data structure."],
})
data_enu.projects.push({
    name: "Study Project: TODO board",
    source: "https://github.com/ionyanov/oin-todo-desc",
    link: "http://onyanov.net/kanban/",
    description: ["A simple KANBAN board. In common mode it saves data in localStorage. After authorization it can works with the server.",
        "Frontend: React 18.2 + axios + mobx + BOOTSTRAP",
        "Backend: Node.js + express + nodemon",
        "For authorisation use password KANBAN"],
})
data_enu.projects.push({
    name: "Current site",
    source: "https://github.com/ionyanov/onyanov.net",
    link: "http://onyanov.net/",
    description: ["React + Typescript + Next.JS"],
})
data_enu.projects.push({
    name: "Study Project: Catalog of articles",
    source: "https://github.com/ionyanov/reactstudyproject",
    link: "http://react.onyanov.net/",
    description: ["Portal created in course of Ulbi Timur ( https://ulbitv.ru/ ).",
        "Webpack, Vite, Typescript, Babel, SCSS(modules), eslint + prettier, jest, axios, Redux + RTK Query, storybook + loki, Cypress configured by manuals.",
        "Architecture: Feature sliced design ( https://feature-sliced.design/docs/get-started/tutorial )",
        "Was developed library of components: modals and portals, drop-down list/menu, " +
        "buttons with different themes, skeletons, lazy images, vertical and horizontal stacks, etc.)",
        "Lots of asynchronous components and lazy downloads. Endpoint injection. Throttle and debounce.",
        "The whole project is described in the Storybook (v6 and migration to v7). Screenshot testing with Loki.",
        "Storybook: http://react.onyanov.net/storybook/ ",
        "The project is covered with unit tests (jest + React Testing Library). For E2E testing using Cypress.",
        "Visual report for all tests.",
        "For Routing use React-router-dom V6 with role-based access checking.",
        "Setup i18n.",
        "Wrote few scripts with working with AST (Abstract syntax tree).",
        "GitHub pre-commit hooks and similar checks with Husky",
        "Backend: json-server"]
})
data_enu.projects.push({
    name: "Internet shop for handmade cosplay staff",
    source: "https://github.com/ionyanov/neocosplayshop",
    link: "https://neocosplayshop.online/",
    description: ["Allows to maintain a catalog of products. Communication with customers is carried out via mail (specifics of the business process).",
        "Frontend: Vite + React + TypeScript + Material UI + RTK Query",
        "Backend: Nest.js + Multer + Prisma + MYSQL"],
})

export default data_enu;