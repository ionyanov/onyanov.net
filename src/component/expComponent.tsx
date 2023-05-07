import React from 'react';
import Expiriense from "../model/expiriense";
import dateFormat, {DATE_DETAIL_FORMAT} from "../helpers/dateFormat";
import dateDiff, {DATEDIFF_FORMAT} from "../helpers/dateDiff";
import TagComponent from "./tagComponent";

export enum DATE_FORMAT {
    SHORT,
    FULL
}

interface CompProps {
    workItem: Expiriense;
    format?: DATE_FORMAT;
    lang?: 'ru' | 'en';
}

const ExpComponent: React.FC<CompProps> = ({workItem, format = DATE_FORMAT.FULL, lang = 'ru'}) => {
    const dtFormat: DATE_DETAIL_FORMAT = format === DATE_FORMAT.FULL ? DATE_DETAIL_FORMAT.MONTH : DATE_DETAIL_FORMAT.YEAR;
    const dfFormat: DATEDIFF_FORMAT = format === DATE_FORMAT.FULL ? DATEDIFF_FORMAT.WITH_MONTH : DATEDIFF_FORMAT.ONLY_YEAR;

    return (
        <>
            <div className="workPlace">
                <div className="workEmployer">{workItem.company} ({workItem.location})</div>
                {workItem.title ?
                    <div className="workJobTitle">{workItem.title}</div>
                    :
                    <></>
                }
                <div className="workDuration">
                    {dateFormat(workItem.startDt, dtFormat)}
                    {workItem.endDt ?
                        ' - ' + dateFormat(workItem.endDt, dtFormat) + ' '
                        : lang == 'ru' ? ' - настоящее время ' : ' - current time '
                    }
                    ({dateDiff(workItem.startDt, workItem.endDt, dfFormat, lang)})
                </div>
                <div className="workDescription">{workItem.description.join(' ')}</div>
                <div className="workTags">{workItem.tags.map(item =>
                    <TagComponent key={item} tag={item}/>
                )}</div>

            </div>
        </>
    );
};

export default ExpComponent;