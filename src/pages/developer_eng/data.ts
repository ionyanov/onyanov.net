import CV from "../../model/resume";

const data: CV = new CV();
data.firstName = "Ilya";
data.middleName = "";
data.lastName = "Onyanov";
data.dateOfBirth = new Date('1986-04-16');
data.jobTitle = "Fullstack developer";
data.contactInfo.email = "onyanov@gmail.com";
data.contactInfo.phone = "";
data.contactInfo.linkedIn = "https://www.linkedin.com/in/ilya-onyanov-b81561178/";
data.contactInfo.address = "Armenia, Yerevan";
data.contactInfo.website = "www.onyanov.net";
data.description = ["Имею большой опыт разработки на различных языках по методологиям Waterfall и Agile (KANBAN и SCRUM).",
    "Работал в маленьких (1-3 человека) и больших(~300 человек) командах в различных ролях: " +
    "3-я линия сопровождения, аналитик, разработчик, руководитель разработки, руководитель проекта.",
    "Длительное время руководил командами разработки и отделом при доработке Siebel CRM.",
    "В настоящее время решил сменить направление деятельности и заняться FullStack разработкой.",
    "Для смены специальности реализовал несколько pet-проектов. Для систематизации знаний и расширения кругозора прошел дополнительное обучение.",
    "В работе предпочитаю клиентоориентированный подход: стараюсь выявить требуемый процесс и ожидаемый результат."];
data.photo = "photo";

data.education.push({
    startDt: new Date('2003-07-01'), endDt: new Date('2008-07-01'),
    degree: "IT specialist", description: "Information technology in jurisprudence",
    institution: "Volgograd State University", location: "Volgograd"
})

data.expiriense.push({
    company: "Volma",
    title: "Software developer",
    startDt: new Date('2007-05-21'),
    endDt: new Date('2009-01-21'),
    location: "Volgograd",
    description: ["Develop corporate system with VB6. ",
        "Migrate project to .NET Framework 2.0 and .NET Framework 3.5 on second step.",
        "Was third-line support. Wrote user instructions.",
        "I developed local support system, integrated in main solution,",
        "access system and report system (dynamic SQL)."],
    tags: ["MS SQL", "C#", "VB6", ".NET"]
})
data.expiriense.push({
    company: "Lukoil-Inform",
    title: "Software developer (support)",
    startDt: new Date('2009-01-21'),
    endDt: new Date('2009-12-31'),
    location: "Volgograd",
    description: ["I supported corporate solution on Dephi 2006 with COM+.",
        "Tuning SQL-queries in Oracle and MS SQL.",
        "Wrote user instructions.",
        "Develop additional programs on .NET 2.0.",
        "Developed report in CristalReport and MS Report."],
    tags: ["MS SQL", "Oracle", "C#", "Dephi"]
})
data.expiriense.push({
    company: "Softline",
    title: "IT consultant",
    startDt: new Date('2010-01-21'),
    endDt: new Date('2011-08-10'),
    location: "Moscow",
    description: ["Customise Oracle CRM on Demand for travel company.",
        "Analyzed requirements,",
        "develop intagration with local ABS(1С 7.7).",
        "Wrote developers and users instructions.",
        "<br/>",
        "Customise SAP Business Objects for Holcim Rus.",
        "Analyzed requirements and designed solution.",
        "Wrote developers and users documentation.",
        "Designed DB and MS OLAP (MS SQL Server 2008).",
        "Developed ETL-procedure with SAP Business Objects Data Integrator.",
        "Create SAP Business Objects reports and Xelsius-panel. Setup portal InfoView."],
    tags: ["MS SQL", "MS OLAP", "SAP Business Objects", "ETL", "Oracle CRM on Demand"]
})
data.expiriense.push({
    company: "Technoserv-Consulting",
    title: "Senior Siebel CRM developer",
    startDt: new Date('2011-08-22'),
    endDt: new Date('2013-06-26'),
    location: "Moscow",
    description: ["Customise Siebel CRM in banks.",
        "Wrote technical documentation.",
        "Managed developer team (10 developer)."],
    tags: ["Oracle", "Siebel CRM"]
})
data.expiriense.push({
    company: "Sberbank-Technology",
    title: "Software engineer",
    startDt: new Date('2013-07-01'),
    endDt: new Date('2014-03-19'),
    location: "Moscow",
    description: ["Develop report system on Oracle BI by data Siebel СRM.",
        "Designed DB and developed ETL with PL/SQL.",
        "Created report with BI Answers.",
        "Third-line support."],
    tags: ["Oracle", "Oracle BI", "ETL"]
})
data.expiriense.push({
    company: "Technoserv-Consulting",
    title: "Senior Siebel CRM developer",
    startDt: new Date('2014-04-18'),
    endDt: new Date('2015-04-17'),
    location: "Moscow",
    description: ["Customise Siebel CRM in banks.",
        "Solved non-standard problems."],
    tags: ["Oracle", "Siebel CRM"]
})
data.expiriense.push({
    company: "BinBank",
    title: "Senior Siebel CRM developer",
    startDt: new Date('2015-04-18'),
    endDt: new Date('2015-12-20'),
    location: "Moscow",
    description: ["Customise Siebel CRM in banks.",
        "Migrate solution to new interface version OpenUI."],
    tags: ["Oracle", "Siebel CRM"]
})
data.expiriense.push({
    company: "Sberbank-Technology",
    title: "Senior Software Engineer",
    startDt: new Date('2015-12-21'),
    endDt: new Date('2018-05-22'),
    location: "Moscow",
    description: ["Design solution for Siebel CRM.",
        "Managed developer team (30 person) and problem solving.",
        "Coordinate migration to Agile process. Synchronise Agile and Waterfall stream.",
        "Developed delivery system (used TeamCity + bash).",
        "Migrate to CI/CD process in common tools (Ansible, Jenkins, Python)."],
    tags: ["Oracle", "Siebel CRM", "TeamCity", "Ansible", "Jenkins", "CI/CD"]
})
data.expiriense.push({
    company: "Uralsib",
    title: "Software Architect",
    startDt: new Date('2018-05-23'),
    endDt: new Date('2019-04-26'),
    location: "Moscow",
    description: ["Design solution for Siebel CRM.",
        "Implementation of CI/CD practices for Siebel CRM.",
        "Organized the work of geo-distributed teams (5 locations from 4 companies).",
        "It turned out to switch to two-week releases instead of 2 times a year."],
    tags: ["Oracle", "Siebel CRM", "CI/CD"]
})
data.expiriense.push({
    company: "Freelance",
    title: "",
    startDt: new Date('2019-04-26'),
    endDt: new Date('2020-08-30'),
    location: "Moscow",
    description: ["Design and development different solution based on Siebel CRM."],
    tags: ["Oracle", "Siebel CRM"]
})
data.expiriense.push({
    company: "Russian Agricultural Bank",
    title: "Head of department for CRM Systems",
    startDt: new Date('2020-09-01'),
    endDt: new Date('2022-10-30'),
    location: "Moscow",
    description: ["Responsible for retail business systems based on Siebel CRM: Collection, MDM, CC.",
        "Organized the work of employees and contractors.",
        "Solved technical problems."],
    tags: ["Oracle", "Siebel CRM"]
})
data.expiriense.push({
    company: "Solvit.AM",
    title: "Fullstack Developer",
    startDt: new Date('2022-11-01'),
    endDt: undefined,
    location: "Yerevan",
    description: [],
    tags: []
})

data.languages.push({name: "Russian", level: "Native"});
data.languages.push({name: "English", level: "B1"});

data.projects.push({
    name: "Personal site Sergey Agasaryan",
    source: "https://github.com/ionyanov/php_serguius.ru.git",
    link: "http://onyanov.net/serguius",
    description: ["Developed in 2004 on static HTML, later rewritten in PHP using class.phpSecurityAdmin and class.phpMysqlConnection libraries.",
        "Database: MySQL.",
        "Design by customer.",
        "I developed about 30 different sites with a similar architecture during 2005-2010."],
})
data.projects.push({
    name: "Personal site on PHP",
    source: "https://github.com/ionyanov/php_onyanov.net",
    link: "http://onyanov.net/php/",
    description: ["Personal page in PHP. A template was taken from open sources on static HTML and modified to be able to fill with data from the data structure"],
})
data.projects.push({
    name: "Study Project: TODO board",
    source: "https://github.com/ionyanov/oin-todo-desc",
    link: "http://onyanov.net/kanban",
    description: ["A simple KANBAN board. In common mode it saves data in localStorage. After authorization it can works with the server.",
        "Frontend: React 18.2 + axios + mobx + BOOTSTRAP + JWT",
        "Backend: Node.js + express + nodemon"],
})
data.projects.push({
    name: "Current site",
    source: "https://github.com/ionyanov/onyanov.net",
    link: "http://onyanov.net/",
    description: ["React + Typescript"],
})
data.projects.push({
    name: "Study Project: Catalog of articles",
    source: "https://github.com/ionyanov/reactstudyproject",
    link: "http://onyanov.net/reactstudyproject",
    description: ["Portal created in course of Ulbi Timur (https://ulbitv.ru/)",
        "Webpack и Vite, Typescript, Babel, SCSS, eslint + prettier, jest, axios, Redux + RTK, storybook + loki, Cypress configured by manuals.",
        "Architecture: Feature sliced design (https://feature-sliced.design/docs/get-started/tutorial)",
        "Was developed components library: modals and portals, drop-down lists / menus, " +
        "buttons with different themes, skeletons, pop-ups, lazy images, drawer, vertical and horizontal stacks, etc.)",
        "Lots of asynchronous components and lazy downloads. Endpoint injection. Throttle and debounce.",
        "The whole project is described in the Storybook (v6 and migration to v7). Screenshot testing with Loki",
        "The project is covered with unit tests (jest + React Testing Library). For E2E testing using Cypress.",
        "Visual report for all tests.",
        "For Routing use React-router-dom V6 with role-based access checking.",
        "Setup i18n.",
        "GitHub pre-commit hooks and similar checks with Husky",
        "Backend: json-server"]
})

export default data;