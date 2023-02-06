import React from "react";
import Main from "../pages/dev_rus/main";

type NavigateLink = {
    path: string;
    title: string;
    component: React.ReactNode;
}

let NavArray: NavigateLink[];

NavArray = [
    {path: '/', title: 'Русский', component: <Main/> },
    {path: '/enu', title: 'English', component: <Main/> },
    {path: '/port', title: 'Portugalski', component: <Main/> }
];

export default NavArray;