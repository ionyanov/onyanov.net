'use client'

import {FC, useEffect, useState} from 'react';
import Link from "next/link";
import Expiriense from "../model/expiriense";
import CV from "../model/resume";
import {useFilter} from "../helpers/filterData";
import ExpComponent, {DATE_FORMAT} from "./expComponent";
import EduComponent from "./eduComponent";
import {ContactInformationItem} from "./ContactInformationItem";
import ProjComponent from "./projComponent";
import BtnComponent from "./btnComponent";
import FilterComponent from "./filterComponent";

interface CVCompProps {
    currentCV: CV
}

const CVComponent: FC<CVCompProps> = ({currentCV}) => {
    let [expiriense, setExpiriense] = useState<Expiriense[]>([]);
    let {sortOrder, selectedTags} = useFilter()

    useEffect(() => {
        currentCV.fullName = `${currentCV.lastName} ${currentCV.firstName} ${currentCV.middleName}`;
        let _tags: string[] = [];
        currentCV.expiriense.map(item => _tags = [...new Set([..._tags, ...item.tags])]);
        currentCV.tags = _tags.filter(Boolean).sort();

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
        <div id="app" className="app">
            <BtnComponent/>
            <div className="cvTitle">
                <div className="contactInfo">
                    <ContactInformationItem style='contactPhone'
                                            title={currentCV.local.Phone}
                    >{currentCV.contactInfo.phone}</ContactInformationItem>
                    <ContactInformationItem style='contactEmail'
                                            title={currentCV.local.Email}
                    >{currentCV.contactInfo.email}</ContactInformationItem>
                    <ContactInformationItem style='contactLinkedin'
                                            title={currentCV.local.LinkedIn}
                    >{!currentCV.contactInfo.linkedIn ?
                        ''
                        :
                        <Link href={currentCV.contactInfo.linkedIn || ''}
                              target='_blank'>{currentCV.local.profile}</Link>
                    }
                    </ContactInformationItem>
                    <ContactInformationItem style='contactWeb'
                                            title={currentCV.local.Web}
                    >{currentCV.contactInfo.website}</ContactInformationItem>
                    <ContactInformationItem style='contactAddress'
                                            title={currentCV.local.Address}
                    >{currentCV.contactInfo.address}</ContactInformationItem>
                </div>
                <div className="nameTitle">
                    <h1 className="fullName">{currentCV.fullName}</h1>
                    <h2 className="jobTitle">{currentCV.jobTitle}</h2>
                </div>
            </div>
            <div className="descriptionHolder">
                {currentCV.description?.map((line, index) => <p key={index} className="description">{line}</p>)}
            </div>
            <div className="content">
                <div className="contentRow">
                    <div className="contentCol colHead">
                        <h2 className="colHead">{currentCV.local.Experience}</h2>
                        <FilterComponent tags={currentCV.tags} lang={currentCV.local.lang}/>
                    </div>
                    <div className="contentCol colBody">{expiriense.sort((a: Expiriense, b: Expiriense) =>
                        (a.startDt < b.startDt) ? sortOrder * 1 : ((a.startDt > b.startDt) ? sortOrder * -1 : 0)
                    ).map((item, index) =>
                        <ExpComponent key={index} workItem={item} format={DATE_FORMAT.SHORT}
                                      lang={currentCV.local.lang}/>
                    )}</div>
                </div>
                <div className="contentRow">
                    <div className="contentCol colHead"><h2 className="colHead">{currentCV.local.Education}</h2></div>
                    <div className="contentCol colBody">{currentCV.education.map((item, index) =>
                        <EduComponent key={index} eduItem={item}/>
                    )}</div>
                </div>
                <div className="contentRow">
                    <div className="contentCol colHead"><h2 className="colHead">{currentCV.local.Languages}</h2></div>
                    <div className="contentCol colBody">
                        {currentCV.languages.map((item) => (
                            <p className="description" key={item.name}>
                                <b>{item.name}({item.level})</b>
                            </p>
                        ))}
                    </div>
                </div>
                <div className="contentRow">
                    <div className="contentCol colHead"><h2 className="colHead">{currentCV.local.Projects}</h2></div>
                    <div className="contentCol colBody">{currentCV.projects.filter(itm => itm.link)
                        .map((item, index) =>
                            <ProjComponent key={index} projItem={item}/>
                        )}</div>
                </div>
            </div>
        </div>
    );
};

export default CVComponent;