import moment from "moment/moment";

export enum DATEDIFF_FORMAN {
    WITH_MONTH,
    ONLY_YEAR
}

function dateByMonthRU(dateStart: Date, dateEnd: Date): string {
    let date1 = moment(dateStart);
    let date2 = moment(dateEnd);

    let diff = moment(date2.diff(date1), true);
    diff.add(-1970, 'years');
    diff.add(1, 'months');
    let year = diff.year()
    let month = diff.month();

    let yearName: string;
    let monthName: string;
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
    return yearName + ' ' + monthName;
}

export default function dateDiff(dateStart: Date = new Date(), dateEnd: Date = new Date(),
                                 format: DATEDIFF_FORMAN = DATEDIFF_FORMAN.WITH_MONTH): string {
    if (format === DATEDIFF_FORMAN.WITH_MONTH) {
        return dateByMonthRU(dateStart, dateEnd)
    } else {
        var months: number;
        months = (dateEnd.getFullYear() - dateStart.getFullYear()) * 12;
        months -= dateStart.getMonth() + 1;
        months += dateEnd.getMonth();
        return Math.round((months <= 0 ? 0 : months) / 12).toString();
    }
}
