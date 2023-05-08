import React from 'react';
import Project from "../model/project";
import {Link} from "react-router-dom";
import {BtnGitHub} from "./btnGitHub";

interface CompProps {
    projItem: Project;
}

const ProjComponent: React.FC<CompProps> = ({projItem}) => {
    return (
        <div className="projItem">
            <div className="projName">
                <Link className="projName" to={projItem.link} target={"_blank"}>{projItem.name}</Link>
                <BtnGitHub src={projItem.source}/>
            </div>
            <div className="projDescription">
                <ul className="projDescription">
                    {projItem.description.map((row, index) => <li key={index}>{row}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default ProjComponent;