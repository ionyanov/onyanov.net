import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import NavArray from "../model/navigateLink";
import JsPDF from "jspdf";
import font from "../Roboto-Regular-normal";

const NavComponent = () => {
    let location = useLocation();

    const generatePDF = () => {
        const doc = new JsPDF('portrait', 'px', 'a4');

        doc.addFileToVFS('Roboto-Regular-normal.ttf', font);
        doc.addFont('Roboto-Regular-normal.ttf', 'Roboto-Regular', 'normal');
        doc.setFont('Roboto-Regular');
        doc.setFontSize(16)
        doc.html("<div style=\"font-family: Roboto-Regula, sans-serif !important;\">апвап  ва пва п ва пав пва</div>",
            {windowWidth: 100})
            .then(() => {
                doc.save('onyanov.pdf');
            });
    }

    return (
        <nav>
            {NavArray.map(route =>
                <NavLink key={route.path}
                         className={`navigate ${route.path === location.pathname ? 'activepage' : ''}`}
                         to={route.path}>
                    {route.title}
                </NavLink>
            )}
            <button onClick={generatePDF} type="button">Export PDF</button>

        </nav>
    );
};

export default NavComponent;