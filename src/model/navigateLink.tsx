import React from "react";
import {DeveloperEng, DeveloperRus} from "../pages";

type NavigateLink = {
    path: string;
    title: string;
    component: React.ReactNode;
    flag: string;
}

let NavArray: NavigateLink[];

NavArray = [
    {path: '/', title: 'Русский', component: <DeveloperRus/>, flag: 'images/rus_flag.png'},
    {path: '/enu', title: 'English', component: <DeveloperEng/>, flag: 'images/gb_flag.png'}
];

export default NavArray;