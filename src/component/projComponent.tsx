import React from 'react';
import Project from "../model/project";

interface CompProps {
    projItem: Project;
}

const ProjComponent: React.FC<CompProps> = ({projItem}) => {

    return (
        <div className="projItem">
            <div>{projItem.date} </div>
            <div> {projItem.name} </div>
            <div> {projItem.link} </div>
            <div> {projItem.link} </div>
        </div>
    );
};

export default ProjComponent;