import React, {FC} from 'react';
import {useFilter} from "../helpers/filterData";

interface TagProps {
    tag: string
}

const TagComponent: FC<TagProps> = (props) => {
    let {selectedTags, selectTag} = useFilter()

    return (
        <button className={`tag ${selectedTags.includes(props.tag) ? 'selected' : ''}`}
                onClick={() => {
                    selectTag(props.tag);
                }}>{props.tag}</button>
    );
};

export default TagComponent;