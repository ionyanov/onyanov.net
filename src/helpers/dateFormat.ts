import moment from "moment/moment";

moment.updateLocale('ru', {
    months: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
});

export enum DATE_DETAIL_FORMAT {
    YEAR = 'YYYY',
    MONTH = 'MMMM YYYY'
}

export default function dateFormat(dateIn?: Date, format: DATE_DETAIL_FORMAT = DATE_DETAIL_FORMAT.MONTH): string {
    if (!dateIn) return "";
    let result = moment(dateIn);
    result.locale('ru')
    return result.format(format);
}