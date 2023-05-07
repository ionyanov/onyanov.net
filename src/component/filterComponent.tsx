import React, {FC} from 'react';
import {SORT_DIRECTION, useFilter} from "../helpers/filterData";
import TagComponent from "./tagComponent";

interface FilterProps {
    tags: string[],
    lang?: 'ru' | 'en'
}

const FilterComponent: FC<FilterProps> = ({tags, lang = 'ru'}) => {
    let {sortOrder, toggleSort} = useFilter()
    const ordNameDesc = lang == 'ru' ? 'В обратном порядке' : 'Descending';
    const ordNameAsc = lang == 'ru' ? 'Хронологический порядок' : 'Ascending';


    return (
        <div className="controls">
            <button className={"filter"}
                    onClick={toggleSort}>{sortOrder === SORT_DIRECTION.ASCENDING
                ? `\u2193 ${ordNameAsc} \u2193`
                : `\u2191 ${ordNameDesc} \u2191`}</button>
            {tags.map((item) =>
                <TagComponent key={item} tag={item}/>
            )}
        </div>
    );
};

export default FilterComponent;