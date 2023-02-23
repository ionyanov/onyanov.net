import React from 'react';
import Project from "../model/project";
import {Link} from "react-router-dom";

interface CompProps {
    projItem: Project;
}

const ProjComponent: React.FC<CompProps> = ({projItem}) => {

    return (
        <div className="projItem">
            <div className="projName">
                {projItem.name}
                <Link className="projLink" to={projItem.link} target={"_blank"}>{projItem.link}</Link>
            </div>
            <div className="projDescription">{projItem.description}</div>
            <div className="projSource">
                Исходный код:
                <Link to={projItem.source} target={"_blank"}>{projItem.source}</Link>
            </div>
        </div>
    );
};

export default ProjComponent;