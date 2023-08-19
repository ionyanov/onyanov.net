import React from 'react';
import NavArray from "../model/navigateLink";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavComponent() {
    return (
        <nav>
            {NavArray.map((route, index) => {
                return (
                    <Link key={index}
                          className={`navigate ${route.path === usePathname() ? 'activepage' : ''}`}
                          href={route.path}>
                        <img src={route.flag} alt={route.title} title={route.title}/>
                    </Link>
                )
            })}
        </nav>
    );
};