import {createContext, useContext} from "react";

export enum SORT_DIRECTION {
    ASCENDING = -1,
    DESCENDING = 1
}

export interface FilterContextProps {
    sortOrder: SORT_DIRECTION
    setSortOrder: (sortOrder: SORT_DIRECTION) => void
    selectedTags: string[]
    setSelectedTags: (tags: string[]) => void
}

export const FiltereContext = createContext<FilterContextProps>({
    sortOrder: SORT_DIRECTION.DESCENDING,
    setSortOrder() {
    },
    selectedTags: [],
    setSelectedTags() {
    },
})

interface UseFilterResult {
    sortOrder: SORT_DIRECTION
    toggleSort: () => void
    selectedTags: string[]
    selectTag: (tag: string) => void
}

export function useFilter(): UseFilterResult {
    const {sortOrder, setSortOrder, selectedTags, setSelectedTags} = useContext(FiltereContext)

    const toggleSort: () => void = () => {
        const newOrder = sortOrder === SORT_DIRECTION.DESCENDING ? SORT_DIRECTION.ASCENDING : SORT_DIRECTION.DESCENDING
        setSortOrder(newOrder)
    }

    const selectTag: (tag: string) => void = (tag: string) => {
        selectedTags.includes(tag) ?
            selectedTags.splice(selectedTags.indexOf(tag), 1)
            : selectedTags.push(tag);
        setSelectedTags([...selectedTags]);
    }

    return {sortOrder, toggleSort, selectedTags, selectTag}
}
