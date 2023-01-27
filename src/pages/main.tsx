import React from 'react';
import CV from "../model/resume";
import {NavLink} from "react-router-dom";
import './main.css';
import ExpComponent from "../component/expComponent";
import EduComponent from "../component/eduComponent";
import ProjComponent from "../component/projComponent";

interface PageProps {
    currentCV: CV;
}

const Main: React.FC<PageProps> = ({currentCV}) => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <div className="App">

                <div>
                    <h1>Опыт работы</h1>
                    {currentCV.expiriense.map((item, index) =>
                        <ExpComponent key={index} workItem={item}/>
                    )}
                </div>
                <div>
                    <h1>Образование</h1>
                    {currentCV.education.map((item, index) =>
                        <EduComponent key={index} eduItem={item}/>
                    )}
                </div>
                <div>
                    <h1>Проекты</h1>
                    {currentCV.projects.map((item, index) =>
                        <ProjComponent key={index} projItem={item}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Main;