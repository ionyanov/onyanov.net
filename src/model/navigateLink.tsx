import React from "react";

type NavigateLink = {
    path: string;
    title: string;
    flag: string;
}

let NavArray: NavigateLink[];

NavArray = [
    {path: '/', title: 'Русский', flag: 'images/rus_flag.png'},
    {path: '/enu', title: 'English', flag: 'images/gb_flag.png'}
];

export default NavArray;