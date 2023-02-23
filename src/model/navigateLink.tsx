import React from "react";
import {DeveloperEng, DeveloperRus, FullRus} from "../pages";

type NavigateLink = {
    path: string;
    title: string;
    component: React.ReactNode;
}

let NavArray: NavigateLink[];

NavArray = [
    {path: '/', title: 'Русский(разработчик)', component: <DeveloperRus/>},
    {path: '/full', title: 'Русский(полный)', component: <FullRus/>},
    {path: '/enu', title: 'English', component: <DeveloperEng/>}
];

export default NavArray;