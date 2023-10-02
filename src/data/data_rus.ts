import CV from "../model/resume";

const dev_rus: CV = new CV();
dev_rus.local = {
    lang: 'ru',
    Phone: 'Телефон',
    Email: 'Email',
    LinkedIn: 'LinkedIn',
    profile: 'профиль',
    Web: 'Web',
    Address: 'Адрес',
    Experience: 'Опыт работы',
    Education: 'Образование',
    Languages: 'Языки',
    Projects: 'Проекты'
}


dev_rus.firstName = "Илья";
dev_rus.middleName = "Николаевич";
dev_rus.lastName = "Онянов";
dev_rus.dateOfBirth = new Date('1986-04-16');
dev_rus.jobTitle = "Fullstack developer";
dev_rus.contactInfo.email = "onyanov@gmail.com";
dev_rus.contactInfo.phone = "+374 43292406";
dev_rus.contactInfo.linkedIn = "https://www.linkedin.com/in/ilya-onyanov-b81561178/";
dev_rus.contactInfo.address = "Армения, Ереван";
dev_rus.contactInfo.website = "www.onyanov.net";
dev_rus.description = ["Имею большой опыт разработки на различных языках по методологиям Waterfall и Agile (KANBAN и SCRUM).",
    "Работал в маленьких (1-3 человека) и больших(~300 человек) командах в различных ролях: " +
    "3-я линия сопровождения, аналитик, разработчик, руководитель разработки, руководитель проекта.",
    "Длительное время руководил командами разработки и отделом Siebel CRM.",
    "В настоящее время решил сменить направление деятельности и заняться FullStack разработкой.",
    "Для смены специальности реализовал несколько pet-проектов. Для систематизации и расширения знаний, я прошел дополнительное обучение."];
dev_rus.photo = "photo";

dev_rus.education.push({
    startDt: new Date('2003-07-01'), endDt: new Date('2008-07-01'),
    degree: "Информатик-юрист", description: "Прикладная информатика в юриспруденции",
    institution: "Волгоградский Государственный Университет", location: "Волгоград"
})

dev_rus.expiriense.push({
    company: "ООО Волма",
    title: "Инженер-программист",
    startDt: new Date('2007-05-21'),
    endDt: new Date('2009-01-21'),
    location: "Волгоград",
    description: ["Участвовал в разработке корпоративной системы производственного учета на VB6 " +
    "и последующий перевод всего проекта на .NET Framework 2.0 и далее на .NET Framework 3.5.",
        "Занимался поддержкой пользователей и написанием пользовательских инструкций.",
        "Разрабатывал подсистему поддержки пользователей, встроенную в основную систему, " +
        "подсистему управления правами пользователей и подсистему отчетности (динамическое генерирование SQL).",
        "Разрабатывал интеграция с MS Office и 1C. Работал с SVN и SourceSafe."],
    tags: ["MS SQL", "C#", "VB6"]
})
dev_rus.expiriense.push({
    company: "ООО Лукойл-Информ",
    title: "Инженер-программист",
    startDt: new Date('2009-01-21'),
    endDt: new Date('2009-12-31'),
    location: "Волгоград",
    description: ["Занимался сопровождением корпоративных приложений, написанных в среде Dephi2006 с использованием технологии COM+.",
        "Решал проблемы производительности ПО, оптимизировал сложные SQL-запросы в БД Oracle и MS SQL.",
        "Подготавливал документацию: технические задания, руководства пользователя и разработчика.",
        "Разрабатывал вспомогательное программное обеспечение на платформе .NET 2.0.",
        "Разрабатывал отчеты на шаблонах CristalReport и MS Report.",
        "Разворачивал и администрировал SVN-сервера, TFS, StarTeam."],
    tags: ["MS SQL", "Oracle", "C#", "Dephi"]
})
dev_rus.expiriense.push({
    company: "Softline",
    title: "Консультант",
    startDt: new Date('2010-01-21'),
    endDt: new Date('2011-08-10'),
    location: "Москва",
    description: ["Участвовал в проекте внедрения Oracle CRM on Demand в туристической компании.",
        "Собирал требования к работе CRM Oracle CRM On Demand. ",
        "Разрабатывал модуль интеграции Oracle CRM On Demand с 1С 7.7.",
        "Подготавливал спецификаций: техническое задание, инструкция пользователя, " +
        "инструкция администратора, инструкция программиста 1С.",
        "Настраивал приложение под предметную область заказчика. ",
        "<br/>",
        "Участвовал в проекте внедрения SAP Business Objects в Holcim Rus " +
        "от ведения пресейла и формализации требований до постпроектного сопровождения.",
        "Проектировал архитектуры системы.",
        "Проектировал базу данных и хранилища на основе MS OLAP (MS SQL Server 2008).",
        "Разрабатывал процедуры ETL с использованием SAP Business Objects Data Integrator.",
        "Контролировал работу субподрядчиков и коллег.",
        "Писал проектную документацию: техническое задание, инструкция администратора, инструкция пользователя.",
        "Настраивал отчеты SAP Business Objects, панели Xelsius и портал InfoView (структура каталога, разграничение доступа).",
        "Проводил обучения пользователей."],
    tags: ["MS SQL", "MS OLAP", "SAP Business Objects", "ETL", "Oracle CRM on Demand"]
})
dev_rus.expiriense.push({
    company: "Техносерв-консалтинг",
    title: "Ведущий разработчик Siebel CRM",
    startDt: new Date('2011-08-22'),
    endDt: new Date('2013-06-26'),
    location: "Москва",
    description: ["Дорабатывал Siebel CRM на основание ТЗ в банковском секторе (VTB, PSB).",
        "Готовил дизайны интеграции с прочими информационными системами.",
        "Распределял задания по группе разработки, контролировал качество и сроки выполнения.",
        "Участвовал в нагрузочном тестировании разработанного решения."],
    tags: ["Oracle", "Siebel CRM"]
})
dev_rus.expiriense.push({
    company: "Сбербанк-Технологии",
    title: "Главный инженер",
    startDt: new Date('2013-07-01'),
    endDt: new Date('2014-03-19'),
    location: "Москва",
    description: ["Проектировал и разрабатывал систему отчетности на Oracle BI по данным Siebel СRM.",
        "Собирал и анализировал бизнес-требования.",
        "Проектировал хранилище данных.",
        "Писал ETL процессы на PL/SQL.",
        "Настраивал репозиторий и шаблоны отчетов в BI Answers.",
        "Сопровождал существующее решение (исправление ошибок, консультирование пользователей)."],
    tags: ["Oracle", "Oracle BI", "ETL"]
})
dev_rus.expiriense.push({
    company: "Техносерв-консалтинг",
    title: "Архитектор Siebel CRM",
    startDt: new Date('2014-04-18'),
    endDt: new Date('2015-04-17'),
    location: "Москва",
    description: ["Решал сложные технические задачи на проекте развития Siebel CRM в VTB.",
        "Администрировал стенды тестирования и выстраивал процесс управления изменениями.",
        "Анализировал требования и проектировал доработки Siebel CRM."],
    tags: ["Oracle", "Siebel CRM"]
})
dev_rus.expiriense.push({
    company: "БинБанк",
    title: "Главный Разрабочик Siebel CRM",
    startDt: new Date('2015-04-18'),
    endDt: new Date('2015-12-20'),
    location: "Москва",
    description: ["Дорабатывал Siebel CRM на основане ТЗ.",
        "Мигрировал рабочее место сотрудника с HI в OpenUI.",
        "Настроил интеграцию с Avaya."],
    tags: ["Oracle", "Siebel CRM"]
})
dev_rus.expiriense.push({
    company: "Сбербанк-Технологии",
    title: "Главный руководитель направления по развитию ИТ-систем",
    startDt: new Date('2015-12-21'),
    endDt: new Date('2018-05-22'),
    location: "Москва",
    description: ["Анализировал требования и проектировал доработки Siebel CRM.",
        "Контролировал работу команды разработки (30 человек) и решал сложные технические задачи.",
        "Занимался процессом Agile-трансформации. Синхронизировал работу команд Agile и Waterfall в переходный период.",
        "Решал конфликтные ситуации в процессе подготовки внедрения.",
        "Управлял сборками и установкой релиза на контура тестирования (использовались TeamCity + bash).",
        "Внедрял практики CI/CD для Siebel CRM в рамках централизованного проекта.",
        "Разрабатывал скрипты автоматизации шагов процесса (Jenkins, Ansible, Python)."],
    tags: ["Oracle", "Siebel CRM", "TeamCity", "Ansible", "Jenkins", "CI/CD"]
})
dev_rus.expiriense.push({
    company: "Уралсиб",
    title: "Архитектор ЕФС",
    startDt: new Date('2018-05-23'),
    endDt: new Date('2019-04-26'),
    location: "Москва",
    description: ["Анализировал требования и проектировал доработки на этапе предпроекта в системе Siebel CRM.",
        "Организовывал конкурсные процедуры по выбору подрядчиков развития и сопровождения Siebel CRM.",
        "Внедрял практики CI/CD для Siebel CRM.",
        "Организовал работу геораспределенных команд (5 локации из 4 компаний).",
        "Получилось перейти на двухнедельные релизы вместо квартальных."],
    tags: ["Oracle", "Siebel CRM", "CI/CD"]
})
dev_rus.expiriense.push({
    company: "Частная практика",
    title: "",
    startDt: new Date('2019-04-26'),
    endDt: new Date('2020-08-30'),
    location: "Москва",
    description: ["Проектировал и разрабатывал систему единого рабочего окна оператора контактного-центра на базе Siebel CRM.",
        "Проектировал и разрабатывал процесс жизненного цикла ипотечной заявки в системе Siebel CRM.",
        "Реализовывал прием заявков на ипотеку от застройщика в системе Siebel CRM.",
        "Реализовывал прием кредитных заявков с маркетплейса Мосбиржи в системе Siebel CRM."],
    tags: ["Oracle", "Siebel CRM"]
})
dev_rus.expiriense.push({
    company: "Россельхозбанк",
    title: "Руководитель центра компетенций систем CRM",
    startDt: new Date('2020-09-01'),
    endDt: new Date('2022-10-30'),
    location: "Москва",
    description: ["Отвечал за развитие систем розничного бизнеса на базе Siebel CRM: " +
        "Collection, Master Data Management, контактный-центр.",
        "Организовал совместную работу сотрудников центра компетенции и подрядчиков.",
        "Участвовал в выборе решения по импортозамещению и проработке планов внедрения.",
        "Решал сложные технические задачи в зоне ответсвенности центра компетенций."],
    tags: ["Oracle", "Siebel CRM"]
})
dev_rus.expiriense.push({
    company: "Солвит АМ",
    title: "Разработчик",
    startDt: new Date('2022-10-24'),
    endDt: undefined,
    location: "Ереван",
    description: [],
    tags: []
})

dev_rus.languages.push({name: "Русский", level: "родной"});
dev_rus.languages.push({name: "Английский", level: "читаю профессиональную литературу"});

dev_rus.projects.push({
    name: "Личный сайт Сергея Агасарян",
    source: "https://github.com/ionyanov/php_serguius.ru.git",
    link: "http://serguius.ru/",
    description: ["Разработан в 2004 на статичном HTML, Позднее переписан на PHP с использованием готовых библиотек phpSecurityAdmin и phpMysqlConnection.",
        "База данных на MySQL.",
        "Дизайн предоставлен заказчиком.",
        "За 2005-2010 года я разработал около 30 разных сайтов c аналогичной архитектурой."],
})
dev_rus.projects.push({
    name: "Сайт-визитка на PHP",
    source: "https://github.com/ionyanov/php_onyanov.net",
    link: "https://onyanov.net/php/",
    description: ["Личная страница на PHP. Был взят шаблон из открытых источников на статичном HTML и доработан для возможности наполнения из структуры данных."],
})
dev_rus.projects.push({
    name: "Учебный проект: Панель задач",
    source: "https://github.com/ionyanov/oin-todo-desc",
    link: "https://onyanov.net/kanban/",
    description: ["Простейшая KANBAN доска. В обычном режиме сохраняет данные в loсalStorage. После авторизации возможна работа с данными на сервер.",
        "Frontend: React 18.2 + axios + mobx + BOOTSTRAP",
        "Backend: Node.js + express + nodemon",
        "Для авторизации используется пароль KANBAN"],
})
dev_rus.projects.push({
    name: "Текущий сайт",
    source: "https://github.com/ionyanov/onyanov.net",
    link: "https://onyanov.net/",
    description: ["React + Typescript + Next.JS"],
})
dev_rus.projects.push({
    name: "Учебный проект: Каталог статей",
    source: "https://github.com/ionyanov/reactstudyproject",
    link: "https://react.onyanov.net/",
    description: ["Портал, созданный по курсу Ульби Тимура ( https://ulbitv.ru )",
        "С нуля настроен Webpack, Vite, Typescript, Babel, SCSS(modules), eslint + prettier, jest, axios, Redux + RTK Query, storybook + loki, Cypress.",
        "Архитектура: Feature sliced design ( https://feature-sliced.design/docs/get-started/tutorial ).",
        "Разработана библиотека компонент (модальные окна с порталами, выпадающие списки/меню, " +
        "кнопки с разными темами, скелетоны, попапы, ленивые изображения, вертикальные и горизонтальные стеки и т.д.).",
        "Создано множество асинхронных компонентов и lazy загрузок. Инъекция эндпоинтов. Throttle и debounce.",
        "Весь проект описан в Storybook (изначально v6 с миграцией на v7). Скриншотное тестированние с помощью Loki.",
        "Storybook: https://react.onyanov.net/storybook/ ",
        "Проект покрыт юнит тестами (jest + React Testing Library). Для E2E-тестирования используется Cypress.",
        "Для тестов настроены визуальные отчеты.",
        "Маршрутизация настроена с помощью React-router-dom V6 с проверкой доступа по ролям.",
        "Настроен i18n.",
        "Написано несколько вспомогательных скриптов с анализом AST (Abstract syntax tree).",
        "GitHub pre-commit хуки и аналогичные проверки с помощью Husky.",
        "Backend: json-server"],
})
dev_rus.projects.push({
    name: "Интернет магазин костюмов для косплея",
    source: "https://github.com/ionyanov/neocosplayshop",
    link: "https://neocosplayshop.online/",
    description: ["Позволяет вести каталог товаров. Общение с покупателями ведётся через почту (специфика бизнес-процесса).",
        "Frontend: Vite + React + TypeScript + Material UI + RTK Query",
        "Backend: Nest.js + Multer + Prisma + MYSQL"],
})

export default dev_rus;