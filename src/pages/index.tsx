import {lazy} from 'react'

export const DeveloperRus = lazy(async () => await import("./developer_rus/DeveloperRus"))
export const DeveloperEng = lazy(async () => await import("./developer_eng/DeveloperEng"))
