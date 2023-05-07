import React, {useEffect, useState} from 'react';
import ExpComponent, {DATE_FORMAT} from "../../component/expComponent";
import EduComponent from "../../component/eduComponent";
import Expiriense from "../../model/expiriense";
import currentCV from "./data";
import {useFilter} from "../../helpers/filterData";
import FilterComponent from "../../component/filterComponent";
import {Link} from "react-router-dom";
import {ContactInformationItem} from "../../component/ContactInformationItem";
import ProjComponent from "../../component/projComponent";
import BtnComponent from "../../component/btnComponent";

const DeveloperEng: React.FC = React.forwardRef(() => {
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
        <div id="app" className="app">
            <BtnComponent/>
            <div className="cvTitle">
                <div className="contactInfo">
                    <ContactInformationItem style='contactPhone'
                                            title='Phone'
                    >{currentCV.contactInfo.phone}</ContactInformationItem>
                    <ContactInformationItem style='contactEmail'
                                            title='Email'
                    >{currentCV.contactInfo.email}</ContactInformationItem>
                    <ContactInformationItem style='contactLinkedin'
                                            title='LinkedIn'
                    >{!currentCV.contactInfo.linkedIn ?
                        ''
                        :
                        <Link to={currentCV.contactInfo.linkedIn || ''}
                              target='_blank'>profile</Link>
                    }
                    </ContactInformationItem>
                    <ContactInformationItem style='contactWeb'
                                            title='Web'
                    >{currentCV.contactInfo.website}</ContactInformationItem>
                    <ContactInformationItem style='contactAddress'
                                            title='Address'
                    >{currentCV.contactInfo.address}</ContactInformationItem>
                </div>
                <div className="nameTitle">
                    <h1 className="fullName">{currentCV.fullName}</h1>
                    <h2 className="jobTitle">{currentCV.jobTitle}</h2>
                </div>
            </div>
            <div className="descriptionHolder">
                {currentCV.description?.map(line => <p className="description">{line}</p>)}
            </div>
            <div className="content">
                <div className="contentRow">
                    <div className="contentCol colHead">
                        <h2 className="colHead">Experience</h2>
                        <FilterComponent tags={currentCV.tags} lang={'en'}/>
                    </div>
                    <div className="contentCol colBody">{expiriense.sort((a: Expiriense, b: Expiriense) =>
                        (a.startDt < b.startDt) ? sortOrder * 1 : ((a.startDt > b.startDt) ? sortOrder * -1 : 0)
                    ).map((item, index) =>
                        <ExpComponent key={index} workItem={item} format={DATE_FORMAT.SHORT} lang={'en'}/>
                    )}</div>
                </div>
                <div className="contentRow">
                    <div className="contentCol colHead"><h2 className="colHead">Education</h2></div>
                    <div className="contentCol colBody">{currentCV.education.map((item, index) =>
                        <EduComponent key={index} eduItem={item}/>
                    )}</div>
                </div>
                <div className="contentRow">
                    <div className="contentCol colHead"><h2 className="colHead">Languages</h2></div>
                    <div className="contentCol colBody">
                        {currentCV.languages.map((item) => (
                            <p className="description" key={item.name}>
                                <b>{item.name}({item.level})</b>
                            </p>
                        ))}
                    </div>
                </div>
                <div className="contentRow">
                    <div className="contentCol colHead"><h2 className="colHead">Projects</h2></div>
                    <div className="contentCol colBody">{currentCV.projects.filter(itm => itm.link)
                        .map((item, index) =>
                            <ProjComponent key={index} projItem={item}/>
                        )}</div>
                </div>
            </div>
        </div>
    );
});

export default DeveloperEng;