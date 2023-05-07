import React from 'react';
import PrintComponent from "./printComponent";
import NavComponent from "./navComponent";

export default function BtnComponent() {
    return (
        <div className="buttons">
            <NavComponent/>
            <PrintComponent/>
        </div>
    );
};