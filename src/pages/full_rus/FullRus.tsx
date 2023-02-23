import React, {useEffect, useState} from 'react';
import "./FullRus.css"
import ExpComponent from "../../component/expComponent";
import EduComponent from "../../component/eduComponent";
import ProjComponent from "../../component/projComponent";
import Expiriense from "../../model/expiriense";
import currentCV from "./data";
import {useFilter} from "../../helpers/filterData";
import FilterComponent from "../../component/filterComponent";
import PrintComponent from "../../component/printComponent";

const FullRus: React.FC = React.forwardRef((props, ref) => {
        let [expiriense, setExpiriense] = useState<Expiriense[]>([]);
        let {sortOrder, selectedTags} = useFilter()

        useEffect(() => {
            document.title = currentCV.fullName;
            setExpiriense(currentCV.expiriense);
        }, []);

        useEffect(() => {
            if (selectedTags.length > 0)
                setExpiriense(currentCV.expiriense
                    .filter(item => item.tags.filter(x => selectedTags.includes(x)).length > 0))
            else
                setExpiriense(currentCV.expiriense)
        }, [selectedTags])

        return (
            <>
                <div id="app" className="app">
                    <PrintComponent/>
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
                            <div className="contentCol colHead">
                                <h2 className="colHead">Опыт работы</h2>
                                <FilterComponent tags={currentCV.tags}/>
                            </div>
                            <div className="contentCol colBody">{expiriense.sort((a: Expiriense, b: Expiriense) =>
                                (a.startDt < b.startDt) ? sortOrder * 1 : ((a.startDt > b.startDt) ? sortOrder * -1 : 0)
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
                            <div className="contentCol colBody">{currentCV.projects.filter(itm => itm.link)
                                .map((item, index) =>
                                    <ProjComponent key={index} projItem={item}/>
                                )}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    })
;

export default FullRus;