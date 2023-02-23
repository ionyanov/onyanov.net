import CV from "../../model/resume";

const dev_rus: CV = new CV();
dev_rus.firstName = "Илья";
dev_rus.middleName = "Николаевич";
dev_rus.lastName = "Онянов";
dev_rus.dateOfBirth = new Date('1986-04-16');
dev_rus.jobTitle = "Fullstack developer";
dev_rus.contactInfo.email = "onyanov@gmail.com";
dev_rus.contactInfo.phone = "";
dev_rus.contactInfo.linkedIn = "https://www.linkedin.com/in/ilya-onyanov-b81561178/";
dev_rus.contactInfo.address = "Армения, Ереван";
dev_rus.contactInfo.website = "www.onyanov.net";
dev_rus.description = "";
dev_rus.photo = "photo";

dev_rus.education.push({
    startDt: new Date('2003-07-01'), endDt: new Date('2008-07-01'),
    degree: "Информатик-юрист", description: "Прикладная информатика в Юриспруденции",
    institution: "Волгоградский Государственный Университет", location: "Волгоград"
})

dev_rus.expiriense.push({
    company: "ООО Волма",
    title: "Инженер-программист",
    startDt: new Date('2007-05-21'),
    endDt: new Date('2009-01-21'),
    location: "Волгоград",
    description: ["Участвовал в разработке корпоративной системы производственного учета на VB6 ",
        "и последующий перевод всего проекта на .NET Framework 2.0 и далее на .NET Framework 3.5.",
        "Занимался поддержкой пользователей, написанием пользовательских инструкций.",
        "Разрабатывал подсистему поддержки пользователей, встроенную в систему,",
        "подсистему управления правами пользователей и подсистему отчетсноти (динамическое генерирование SQL).",
        "Разрабатывал интеграция с MS Office, 1C. Работал с SVN и SourceSafe."],
    tags: ["MS SQL", "C#", "VB6", "VB.NET", "SVN", "VBA", ".NET 2.0", ".NET 3.5"]
})
dev_rus.expiriense.push({
    company: "ООО Лукойл-Информ",
    title: "Инженер-программист",
    startDt: new Date('2009-01-21'),
    endDt: new Date('2009-12-31'),
    location: "Волгоград",
    description: ["Занимался сопровождением корпоративных приложений, написанных в среде Dephi2006 с использованием технологии COM+.",
        "Решал проблемы производительности ПО, оптимизировал сложные SQL-запросы в БД Oracle и MS SQL. ",
        "Подготавливал документацию: Техническое задание, Руководство пользователя, Руководство разработчика.",
        "Разрабатывал вспомогательное программное обеспечения на платформе .NET 2.0.",
        "Разрабатывал отчеты на шаблонах CristalReport и MS Report.",
        "Разворачивал и администрировал SVN-сервера, TFS, StarTeam."],
    tags: ["MS SQL", "Oracle", "C#", "Dephi", "SVN", "VBA", "CristalReport", "MS Report"]
})
dev_rus.expiriense.push({
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
dev_rus.expiriense.push({
    company: "Техносерв-консалтинг",
    title: "Ведущий разработчик Siebel CRM",
    startDt: new Date('2011-08-22'),
    endDt: new Date('2013-06-26'),
    location: "Москва",
    description: ["Дорабатывал Siebel CRM на основане ТЗ в банковском секторе (VTB, PSB).",
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
        "Собирал и анализировал бизнес-требований.",
        "Проектировал хранилище данных.",
        "Писал ETL процессы на PL/SQL.",
        "Настраивал репозиторий и шаблоны отчетов в BI Answers.",
        "Сопровождал существующее решение (исправление ошибок, консультирование пользователей)."],
    tags: ["Oracle", "Oracle BI", "PL/SQL"]
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
        "Мигрировал рабочее место оператора в OpenUI.",
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
        "Решение конфликтных ситуаций в процессе подготовки внедрения.",
        "Управлял сборками и установкой релиза на контура тестирования (использовались TeamCity + bash).",
        "Внедрял практики CI/CD для Siebel CRM в рамках централизованного проекта.",
        "Разрабатывал скрипты автоматизации шагов процесса (Ansible, Jenkins, Python)."],
    tags: ["Oracle", "Siebel CRM", "TeamCity", "Ansible", "Jenkins", "CI/CD"]
})
dev_rus.expiriense.push({
    company: "Уралсиб",
    title: "Архитектор ЕФС",
    startDt: new Date('2018-05-23'),
    endDt: new Date('2019-04-26'),
    location: "Москва",
    description: ["Анализовал требования и проектировал доработки на этапе предпроекта в системе Siebel CRM.",
        "Организовывал конкурсные процедуры по выбору подрядчиков развития и сопровождения Siebel CRM.",
        "Внедрил практик CI/CD для Siebel CRM.",
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
    description: ["Проектировал и разрабатывал Единова рабочего окна оператора КЦ на базе Siebel CRM.",
        "Проектировал и разрабатывал жизненного цикла ипотечной заявки в системе Siebel CRM.",
        "Реализовывал прием заявков на Ипотеку от застройщика в системе Siebel CRM.",
        "Реализовывал прием кредитных заявков с маркетплейса Мосбиржи в системе Siebel CRM."],
    tags: ["Oracle", "Siebel CRM"]
})
dev_rus.expiriense.push({
    company: "Россельхозбанк",
    title: "Руководитель центра компетенции систем CRM",
    startDt: new Date('2020-09-01'),
    endDt: new Date('2022-10-30'),
    location: "Москва",
    description: ["Отвечал за развитие систем розничного бизнеса на базе Siebel CRM: " +
        "Collection, MDM(Master Data Management), Контактный-центр." +
        "Организовал совметсную работу сотрудников центра компетенции и подрядчиков.",
        "Участвовал в выборе решения по импортозамещению и проработке планов внедрения.",
        "Решал сложных технических задач в зоне ответсвенности центра компетенции."],
    tags: ["Oracle", "Siebel CRM"]
})
dev_rus.expiriense.push({
    company: "Солвит АМ",
    title: "Технический директор",
    startDt: new Date('2023-01-09'),
    endDt: undefined,
    location: "Ереван",
    description: [],
    tags: []
})

dev_rus.languages.push({name: "Русский", level: "родной"});
dev_rus.languages.push({name: "Английский", level: "читаю профессиональную литературу"});

export default dev_rus;