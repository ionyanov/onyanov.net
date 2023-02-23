import CV from "../../model/resume";

const data: CV = new CV();
data.firstName = "Ilya";
data.middleName = "";
data.lastName = "Onyanov";
data.dateOfBirth = new Date('1986-04-16');
data.jobTitle = "Fullstack developer";
data.contactInfo.email = "onyanov@gmail.com";
data.contactInfo.phone = "968 813 49 22";
data.contactInfo.linkedIn = "https://www.linkedin.com/in/ilya-onyanov-b81561178/";
data.contactInfo.address = "Armenia, Yerevan";
data.contactInfo.website = "www.onyanov.net";
data.description = "description";
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
    tags: ["MS SQL", "C#", "VB6", "VB.NET", "SVN", "VBA", ".NET 2.0", ".NET 3.5"]
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
    tags: ["MS SQL", "Oracle", "C#", "Dephi", "SVN", "VBA", "CristalReport", "MS Report"]
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
    tags: ["Oracle", "Oracle BI", "PL/SQL"]
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
    company: "Солвит АМ",
    title: "Технический директор",
    startDt: new Date('2023-01-09'),
    endDt: undefined,
    location: "Yerevan",
    description: [],
    tags: []
})

data.languages.push({name: "Russian", level: "Native"});
data.languages.push({name: "English", level: "B2"});

data.projects.push({
    name: "Сайт-визитка на PHP",
    source: "https://github.com/ionyanov/onyanov.net/tree/php",
    link: "http://onyanov.net/php/",
    description: "Личная старница на PHP. Был взят шаблон из открытых источников на статичном HTML" +
        " и доработан для возможности наполнения данными из структцры данных",
})
data.projects.push({
    name: "Панель задач",
    source: "https://github.com/ionyanov/oin-todo-desc",
    link: "http://kanban.onyanov.net/",
    description: "Простейщая KANBAN доска. В обычном режиме сохряняет данные в loсalStorage. " +
        "После авторизации работа идет с данными на сервер (Node.JS + MySQL). Обращение через axios.",
})
data.projects.push({
    name: "Сайт-визитка на React",
    source: "https://github.com/ionyanov/onyanov.net",
    link: "http://onyanov.net/",
    description: "Текущий сайт",
})
data.projects.push({
    name: "Учетный проект на React",
    source: "https://github.com/ionyanov/reactstudyproject",
    link: "",
    description: "Портал, созданный по курсу Улюби Тимура (https://ulbitv.ru/)",
})
data.projects.push({
    name: "Гениалогического дерево",
    source: "",
    link: "",
    description: "Сайт гениалогического дерева моей семьи",
})
data.projects.push({
    name: "Сайт - галерея на PHP",
    source: "",
    link: "http://serguius.onyanov.net/",
    description: "Личный сайт Сергея Агасарян на PHP c бд MySQL",
})
data.projects.push({
    name: "Сайт - галерея на React",
    source: "",
    link: "",
    description: "Личный сайт Сергея Агасарян на React + Node.JS c бд MySQL",
})
data.projects.push({
    name: "Интернет магазин косплея на React",
    source: "",
    link: "",
    description: "Интернет магазин париков, костюмов и атрибутики для косплея на React + Node.JS c бд MySQL",
})

export default data;