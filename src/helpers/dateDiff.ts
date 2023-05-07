import moment from "moment/moment";

export enum DATEDIFF_FORMAT {
    WITH_MONTH,
    ONLY_YEAR
}

function getYearNameRU(year: number): string {
    let yearName: string;
    switch (year) {
        case 0:
            yearName = "";
            break;
        case 1:
        case 21:
        case 31:
            yearName = year + " год";
            break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
            yearName = year + " года";
            break;
        default:
            yearName = year + " лет";
            break;
    }
    return yearName;
}

function getYearNameEN(year: number): string {
    let yearName: string;
    switch (year) {
        case 0:
            yearName = "";
            break;
        case 1:
            yearName = year + " year";
            break;
        default:
            yearName = year + " years";
            break;
    }
    return yearName;
}

function dateByMonthRU(dateStart: Date, dateEnd: Date): string {
    let date1 = moment(dateStart);
    let date2 = moment(dateEnd);

    let diff = moment(date2.diff(date1), true);
    diff.add(-1970, 'years');
    diff.add(1, 'months');
    let year = diff.year()
    let month = diff.month();

    let monthName: string;

    switch (month) {
        case 0:
            monthName = "";
            break;
        case 1:
            monthName = "1 месяц";
            break;
        case 2:
        case 3:
        case 4:
            monthName = month + " месяца";
            break;
        default:
            monthName = month + " месяцев";
            break;
    }
    return getYearNameRU(year) + ' ' + monthName;
}

function dateByMonthEN(dateStart: Date, dateEnd: Date): string {
    let date1 = moment(dateStart);
    let date2 = moment(dateEnd);

    let diff = moment(date2.diff(date1), true);
    diff.add(-1970, 'years');
    diff.add(1, 'months');
    let year = diff.year()
    let month = diff.month();

    let monthName: string;

    switch (month) {
        case 0:
            monthName = "";
            break;
        case 1:
            monthName = "1 month";
            break;
        default:
            monthName = month + " months";
            break;
    }
    return getYearNameRU(year) + ' ' + monthName;
}

export default function dateDiff(dateStart: Date = new Date(), dateEnd: Date = new Date(),
                                 format: DATEDIFF_FORMAT = DATEDIFF_FORMAT.WITH_MONTH, lang: 'ru' | 'en'): string {
    if (format === DATEDIFF_FORMAT.WITH_MONTH) {
        return lang == 'ru' ? dateByMonthRU(dateStart, dateEnd) : dateByMonthEN(dateStart, dateEnd);
    } else {
        let months: number;
        months = (dateEnd.getFullYear() - dateStart.getFullYear()) * 12;
        months -= dateStart.getMonth() + 1;
        months += dateEnd.getMonth();
        let year = Math.ceil((months <= 0 ? 0 : months) / 12);
        if (year == 0) return lang == 'ru' ? 'меньше года' : '< year'
        return lang == 'ru' ? getYearNameRU(year) : getYearNameEN(year);
    }
}
