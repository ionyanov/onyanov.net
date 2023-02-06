import React from 'react';
import Education from "../model/education";

interface CompProps {
    eduItem: Education;
}

const EduComponent: React.FC<CompProps> = ({eduItem}) => {
    return (
        <div className="eduItem">
            <div className="eduPlace">
                <div className="eduInstitute">{eduItem.institution} ({eduItem.location})</div>
                <div className="eduDate">{eduItem.startDt.getFullYear()} - {eduItem.endDt?.getFullYear()}</div>
                <div className="eduDescription">{eduItem.description}</div>
            </div>
        </div>
    );
};

export default EduComponent;