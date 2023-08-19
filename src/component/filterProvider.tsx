'use client'

import React, {type FC, type PropsWithChildren, useMemo, useState} from 'react'
import {FiltereContext, SORT_DIRECTION} from "../helpers/filterData";

const FilterProvider: FC<PropsWithChildren> = ({children}) => {
    const [sortOrder, setSortOrder] = useState(SORT_DIRECTION.DESCENDING);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const defaultProps = useMemo(() => ({sortOrder, setSortOrder, selectedTags, setSelectedTags}),
        [sortOrder, selectedTags])

    return (
        <FiltereContext.Provider value={defaultProps}>
            {children}
        </FiltereContext.Provider>
    )
}

export default FilterProvider
