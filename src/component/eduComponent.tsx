import React from 'react';
import Education from "../model/education";

interface CompProps {
    eduItem: Education;
}

const EduComponent: React.FC<CompProps> = ({eduItem}) => {
    return (
        <div className="eduItem">
            <h3>{eduItem.startDt.getFullYear()} - {eduItem.endDt?.getFullYear()}</h3>
            <div>
                <div>{eduItem.institution}</div>
                <div>{eduItem.location}</div>
                <div>{eduItem.degree}</div>
                <div>{eduItem.description}</div>
            </div>
        </div>
    );
};

export default EduComponent;