import React, {FC} from 'react';
import {SORT_DIRECTION, useFilter} from "../helpers/filterData";
import TagComponent from "./tagComponent";

interface FilterProps {
    tags: string[]
}

const FilterComponent: FC<FilterProps> = (props) => {
    let {sortOrder, toggleSort} = useFilter()

    return (
        <div className="controls">
            <button className={"filter"}
                    onClick={toggleSort}>{sortOrder === SORT_DIRECTION.ASCENDING
                ? '\u2193 Хронологический порядок \u2193'
                : '\u2191 В обратном порядке \u2191'}</button>
            {props.tags.map((item) =>
                <TagComponent key={item} tag={item}/>
            )}
        </div>
    );
};

export default FilterComponent;