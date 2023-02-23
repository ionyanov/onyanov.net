import CV from "../../model/resume";

const full_rus: CV = new CV();
full_rus.firstName = "Илья";
full_rus.middleName = "Николаевич";
full_rus.lastName = "Онянов";
full_rus.dateOfBirth = new Date('1986-04-16');
full_rus.jobTitle = "Fullstack developer";
full_rus.contactInfo.email = "onyanov@gmail.com";
full_rus.contactInfo.phone = "968 813 49 22";
full_rus.contactInfo.linkedIn = "linkedIn";
full_rus.contactInfo.address = "Армения, Ереван";
full_rus.contactInfo.website = "www.onyanov.net";
full_rus.description = "description";
full_rus.photo = "photo";

full_rus.education.push({
    startDt: new Date('2003-07-01'), endDt: new Date('2008-07-01'),
    degree: "Информатик-юрист", description: "Прикладная информатика в Юриспруденции",
    institution: "Волгоградский Государственный Университет", location: "Волгоград"
})

full_rus.expiriense.push({
    company: "ООО Волма",
    title: "Инженер-программист",
    startDt: new Date('2007-05-21'),
    endDt: new Date('2009-01-21'),
    location: "Волгоград",
    description: ["Участвовал в разработке корпоративной системы производственного учета на VB6 ",
        "и последующий перевод всего проекта на .NET Framework 2.0 и далее на .NET Framework 3.5.",
        "Занимася поддержкой пользователей, написание пользовательских инструкций.",
        "Разрабатывал систему поддержки пользователей, встроенную в ИС,",
        "систему управления правами пользователей и систему отчетсноти (динамическое генерирование SQL).",
        "Разрабатывал интеграция с MS Office, 1C. Работа с SVN, SourceSafe."],
    tags: ["MS SQL", "C#", "VB6", "VB.NET", "SVN", "VBA", ".NET 2.0", ".NET 3.5"]
})
full_rus.expiriense.push({
    company: "ООО Лукойл-Информ",
    title: "Инженер-программист",
    startDt: new Date('2009-01-21'),
    endDt: new Date('2009-12-31'),
    location: "Волгоград",
    description: ["Занимался сопровождением корпоративных приложений, написанных в среде Dephi2006 с использованием технологии COM+.",
        "Решал проблемы производительности ПО, оптимизировал сложные SQL-запросы в БД Oracle и MS SQL. ",
        "Подготовливал программную документацию: Техническое задание, Руководство пользователя, Руководство разработчика.",
        "Разрабатывал вспомогательное программное обеспечения на платформе .NET 2.0.",
        "Разрабатывал отчеты на шаблонах (CristalReport, MS Report).",
        "Разворачивал и администрировал SVN-сервера, систем бактрекинга, TFS, StarTeam."],
    tags: ["MS SQL", "Oracle", "C#", "Dephi", "SVN", "VBA", "CristalReport", "MS Report"]
})
full_rus.expiriense.push({
    company: "Softline",
    title: "Консультант",
    startDt: new Date('2010-01-21'),
    endDt: new Date('2011-08-10'),
    location: "Москва",
    description: ["Учатсвоал в проект внедрения Oracle CRM on Demand в туристической компании.",
        "Собирал требования к работе CRM Oracle CRM On Demand, ",
        "разработал модуль интеграции Oracle CRM On Demand с 1С 7.7.",
        "Подготавливал спецификаций: техническое задание, инструкции пользователей, " +
        "инструкции администратора, инструкции программиста 1С.",
        "Настраивал приложение под предметную область заказчика. ",
        "<br/>",
        "Участвовал в проекте внедрения SAP Business Objects в Holcim Rus.",
        "От ведения пресейла и формализации требований до поспроектного сопровождения.",
        "Писал проектую документацию (техническое задание, инструкция администратора, инструкция пользователя).",
        "Проектировал архитектуры системы.",
        "Проектировал базу данных и хранилища на основе MS OLAP (MS SQL Server 2008).",
        "Разрабатывал процедуры ETL с использованием SAP Business Objects Data Integrator.",
        "Контролировал работу субподрядчиков и коллег.",
        "Настривал отчеты SAP Business Objects, панелей Xelsius и портала InfoView (структура каталога, разграничение доступа).",
        "Проводил обучения пользователей."],
    tags: ["MS SQL", "MS OLAP", "SAP Business Objects", "ETL", "Oracle CRM on Demand"]
})
full_rus.expiriense.push({
    company: "Техносерв-консалтинг",
    title: "Ведущий разработчик Siebel CRM",
    startDt: new Date('2011-08-22'),
    endDt: new Date('2013-06-26'),
    location: "Москва",
    description: ["Разработка и внедрение Siebel CRM в банковском секторе (VTB, PSB).",
        "Готовил дизайны интеграции с внешними информационными системами и технических заданий на систему.",
        "Распределение заданий по группе разработки, контроль качества и сроков выполнения.",
        "Участие в нагрузочном тестировании разработанного решения."],
    tags: ["Oracle", "Siebel CRM"]
})
full_rus.expiriense.push({
    company: "Сбербанк-Технологии",
    title: "Главный инженер",
    startDt: new Date('2013-07-01'),
    endDt: new Date('2014-03-19'),
    location: "Москва",
    description: ["Проектировал и разрабатывал систему отчетности на Oracle BI по данным Siebel СRM.",
        "Собирал и анализировал бизнес-требований.",
        "Проектировал Проектирование хранилища данных.",
        "Писал ETL процессы на PL/SQL.",
        "настраивал репозиторий и шаблоны отчетов в BI Answers.",
        "Поддержка существующего решения (исправление ошибок, консультирование пользователей)."],
    tags: ["Oracle", "Oracle BI", "PL/SQL"]
})
full_rus.expiriense.push({
    company: "ТРАСТ, Национальный банк",
    title: "Руководитель направления Siebel CRM",
    startDt: new Date('2014-03-19'),
    endDt: new Date('2014-04-17'),
    location: "Москва",
    description: ["Проанализировал текущую инфраструктуру и процессов разработки и подготовил предложения по оптимизации."],
    tags: ["Siebel CRM"]
})
full_rus.expiriense.push({
    company: "Техносерв-консалтинг",
    title: "Архитектор Siebel CRM",
    startDt: new Date('2014-04-18'),
    endDt: new Date('2015-04-17'),
    location: "Москва",
    description: ["Решал сложные технические задачи на проекте развития Siebel CRM в VTB.",
        "Администрировал стенды тестирования и выстраивал процесс управления изменениями.",
        "Анализировал и проектировал нестандартные задачи."],
    tags: ["Oracle", "Siebel CRM"]
})
full_rus.expiriense.push({
    company: "БинБанк",
    title: "Главный Разрабочик Siebel CRM",
    startDt: new Date('2015-04-18'),
    endDt: new Date('2015-12-20'),
    location: "Москва",
    description: ["Доработка Siebel CRM на основане ТЗ.",
        "Мигрировал рабочее мсто оператора в OpenUI.",
        "Настроил интеграцию с Avaya."],
    tags: ["Oracle", "Siebel CRM"]
})
full_rus.expiriense.push({
    company: "Сбербанк-Технологии",
    title: "Главный руководитель направления по развитию ИТ-систем",
    startDt: new Date('2015-12-21'),
    endDt: new Date('2018-05-22'),
    location: "Москва",
    description: ["Анализировал требования и проектировал доработки Siebel CRM.",
        "Контролировал работу команды разработки (30 человек) и решал сложные технические задач.",
        "Занимался процессом Agile-трансформации. Синхронизировал работу команд Agile и Waterfall в переходный период.",
        "Решение конфликтных ситуаций в процессе подготовки внедрения.",
        "Управлял сборками и установкой релиза на все контура (использовались TeamCity + bash).",
        "Внедрял практики CI/CD в рамках централизованного проекта.",
        "Разрабатывал скриптов автоматизации шагов процесса (Ansible, Jenkins, Python)."],
    tags: ["Oracle", "Siebel CRM", "TeamCity", "Ansible", "Jenkins", "CI/CD"]
})
full_rus.expiriense.push({
    company: "Уралсиб",
    title: "Архитектор ЕФС",
    startDt: new Date('2018-05-23'),
    endDt: new Date('2019-04-26'),
    location: "Москва",
    description: ["Анализовал требования и проектировал доработки на этапе предпроекта.",
        "Организовывал конкурсных процедур по выбору подрядчиков (проекты развития и сопровождения).",
        "Внедрение практик CI/CD для Siebel CRM.",
        "Организовал работы геораспределенных команд (5 локации из 4 компаний).",
        "Получилось перейти на двухнедельные релизы вместо 2 раз в год."],
    tags: ["Oracle", "Siebel CRM", "CI/CD"]
})
full_rus.expiriense.push({
    company: "Частная практика",
    title: "",
    startDt: new Date('2019-04-26'),
    endDt: new Date('2020-08-30'),
    location: "Москва",
    description: ["Проектирование и разработка Единова рабочего окна оператора КЦ на базе Siebel CRM.",
        "Проектирование и разработка жизненного цикла ипотечной заявки в системе Siebel CRM.",
        "Автоматический прием заявков на Ипотеку от застройщика в системе Siebel CRM.",
        "Автоматический прием кредитных заявков с маркетплейса Мосбиржи в системе Siebel CRM."],
    tags: ["Oracle", "Siebel CRM"]
})
full_rus.expiriense.push({
    company: "Россельхозбанк",
    title: "Руководитель центра компетенции систем CRM",
    startDt: new Date('2020-09-01'),
    endDt: new Date('2022-10-30'),
    location: "Москва",
    description: ["Отвечал за системы розничного бизнеса на базе Siebel CRM: Collection, МДМ, КЦ." +
    "Организовал работы сотрудников центра компетенции и подрядчиков.",
        "Участвовал в выборе решения по импортозамещению и проработке планов в  недрения.",
        "Решал сложных технических задач в зоне ответсвенности центра компетенции."],
    tags: ["Oracle", "Siebel CRM"]
})
full_rus.expiriense.push({
    company: "Солвит АМ",
    title: "Технический директор",
    startDt: new Date('2023-01-09'),
    endDt: undefined,
    location: "Ереван",
    description: [],
    tags: []
})

full_rus.languages.push({name: "Русский", level: "родной"});
full_rus.languages.push({name: "Английский", level: "читаю профессиональную литературу"});

full_rus.projects.push({
    name: "Сайт-визитка на PHP",
    source: "https://github.com/ionyanov/onyanov.net/tree/php",
    link: "http://onyanov.net/php/",
    description: "Личная старница на PHP. Был взят шаблон из открытых источников на статичном HTML" +
        " и доработан для возможности наполнения данными из структцры данных",
})
full_rus.projects.push({
    name: "Панель задач",
    source: "https://github.com/ionyanov/oin-todo-desc",
    link: "http://kanban.onyanov.net/",
    description: "Простейщая KANBAN доска. В обычном режиме сохряняет данные в loсalStorage. " +
        "После авторизации работа идет с данными на сервер (Node.JS + MySQL). Обращение через axios.",
})
full_rus.projects.push({
    name: "Сайт-визитка на React",
    source: "https://github.com/ionyanov/onyanov.net",
    link: "http://onyanov.net/",
    description: "Текущий сайт",
})
full_rus.projects.push({
    name: "Учетный проект на React",
    source: "https://github.com/ionyanov/reactstudyproject",
    link: "",
    description: "Портал, созданный по курсу Улюби Тимура (https://ulbitv.ru/)",
})
full_rus.projects.push({
    name: "Гениалогического дерево",
    source: "",
    link: "",
    description: "Сайт гениалогического дерева моей семьи",
})
full_rus.projects.push({
    name: "Сайт - галерея на PHP",
    source: "",
    link: "http://serguius.onyanov.net/",
    description: "Личный сайт Сергея Агасарян на PHP c бд MySQL",
})
full_rus.projects.push({
    name: "Сайт - галерея на React",
    source: "",
    link: "",
    description: "Личный сайт Сергея Агасарян на React + Node.JS c бд MySQL",
})
full_rus.projects.push({
    name: "Интернет магазин косплея на React",
    source: "",
    link: "",
    description: "Интернет магазин париков, костюмов и атрибутики для косплея на React + Node.JS c бд MySQL",
})

export default full_rus;