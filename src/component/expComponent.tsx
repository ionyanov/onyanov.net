import React from 'react';
import Expiriense from "../model/expiriense";
import moment from "moment"

interface CompProps {
    workItem: Expiriense;
}

const ExpComponent: React.FC<CompProps> = ({workItem}) => {

    moment.locale('ru', {
        months: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
    });

    const dateDiff = (dateStart?: Date, dateEnd?: Date) => {
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
    const dateFormat = (dateIn?: Date) => {
        if (!dateIn) return "";
        let result = moment(dateIn);
        result.locale('ru')
        return result.format('MMMM YYYY');
    }

    return (
        <div className="workItem">
            <h3>{`${dateFormat(workItem.startDt)} - ${dateFormat(workItem.endDt)}`}</h3>
            <h3>{dateDiff(workItem.startDt, workItem.endDt)}</h3>
            <div>
                <div>{workItem.title}</div>
                {workItem.website ?
                    <div><a href={workItem.website} target="_blank">{workItem.company}</a></div>
                    :
                    <div>{workItem.company}</div>
                }
                <div>{workItem.location}</div>
                <div>{workItem.description}</div>
            </div>
        </div>
    );
};

export default ExpComponent;