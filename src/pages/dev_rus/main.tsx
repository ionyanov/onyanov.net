import React, {useEffect, useState} from 'react';
import CV from "../../model/resume";
import ExpComponent from "../../component/expComponent";
import EduComponent from "../../component/eduComponent";
import ProjComponent from "../../component/projComponent";
import "./main.css"
import Expiriense from "../../model/expiriense";
import cv from "../../data/rus";

const Main: React.FC = React.forwardRef((props, ref) => {
    const [currentCV, setCV] = useState<CV>(cv);

    useEffect(() => {
        document.title = currentCV.fullName;
    }, []);

    return (
        <>
            <div id="app" className="app">
                <div className="cvTitle">
                    <div className="contactInfo">
                        <div className="contactPhone contactRow">
                            <div className="contactTitle">Телефон:</div>
                            <div className="contactValue">{currentCV.contactInfo.phone}</div>
                        </div>
                        <div className="contactEmail contactRow">
                            <div className="contactTitle">Email:</div>
                            <div className="contactValue">{currentCV.contactInfo.email}</div>
                        </div>
                        <div className="contactLinkedin contactRow">
                            <div className="contactTitle">LinkedIn:</div>
                            <div className="contactValue">{currentCV.contactInfo.linkedIn}</div>
                        </div>
                        <div className="contactWeb contactRow">
                            <div className="contactTitle">Web:</div>
                            <div className="contactValue">{currentCV.contactInfo.website}</div>
                        </div>
                    </div>
                    <div className="nameTitle">
                        <h1 className="fullName">{currentCV.fullName}</h1>
                        <h2 className="jobTitle">{currentCV.jobTitle}</h2>
                        <h3 className="address">{currentCV.contactInfo.address}</h3>
                    </div>
                </div>
                <div className="content">
                    <div className="contentRow">
                        <div className="contentCol colHead"><h2 className="colHead">Опыт работы</h2></div>
                        <div className="contentCol colBody">{currentCV.expiriense.sort((a: Expiriense, b: Expiriense) =>
                            (a.startDt < b.startDt) ? 1 : ((a.startDt > b.startDt) ? -1 : 0)
                        ).map((item, index) =>
                            <ExpComponent key={index} workItem={item}/>
                        )}</div>
                    </div>
                    <div className="contentRow">
                        <div className="contentCol colHead"><h2 className="colHead">Образование</h2></div>
                        <div className="contentCol colBody">{currentCV.education.map((item, index) =>
                            <EduComponent key={index} eduItem={item}/>
                        )}</div>
                    </div>
                    <div className="contentRow">
                        <div className="contentCol colHead"><h2 className="colHead">Проекты</h2></div>
                        <div className="contentCol colBody">{currentCV.projects.map((item, index) =>
                            <ProjComponent key={index} projItem={item}/>
                        )}</div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Main;