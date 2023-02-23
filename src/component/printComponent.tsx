import React from 'react';

const PrintComponent = () => {
    return (
        <div className="printButton" onClick={() => window.print()}>
            <img src='images/icn-print.jpg' alt="Logo"/>
        </div>
    );
};

export default PrintComponent;