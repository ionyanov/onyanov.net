import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import NavArray from "../model/navigateLink";

const NavComponent = () => {
    let location = useLocation();

    return (
        <nav>
            {NavArray.map(route =>
                <NavLink key={route.path}
                         className={`navigate ${route.path === location.pathname ? 'activepage' : ''}`}
                         to={route.path}>
                    {route.title}
                </NavLink>
            )}
        </nav>
    );
};

export default NavComponent;