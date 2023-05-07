import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import NavArray from "../model/navigateLink";

export default function NavComponent() {
    let location = useLocation();
    return (
        <nav>
            {NavArray.map((route, index) => {
                return (
                    <NavLink key={index}
                             className={`navigate ${route.path === location.pathname ? 'activepage' : ''}`}
                             to={route.path}>
                        <img src={route.flag} alt={route.title} title={route.title}/>
                    </NavLink>
                )
            })}
        </nav>
    );
};