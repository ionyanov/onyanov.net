import {lazy} from 'react'

export const DeveloperRus = lazy(async () => await import("./developer_rus/DeveloperRus"))
export const FullRus = lazy(async () => await import("./full_rus/FullRus"))
export const DeveloperEng = lazy(async () => await import("./developer_eng/DeveloperEng"))
