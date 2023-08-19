import React from 'react';
import Project from "../model/project";
import {BtnGitHub} from "./btnGitHub";
import Link from "next/link";

interface CompProps {
    projItem: Project;
}

function transformHyperlinks(text: string): string {
    const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    const detectURL = text.match(urlRegex);

    let resultPost = text
    if (detectURL) {
        detectURL.forEach(url => {
            resultPost = resultPost.replace(url, `<a href="${url}" target="_blank" >${url.trim()}</a>`)
        })
    }
    return resultPost;
}

const ProjComponent: React.FC<CompProps> = ({projItem}) => {
    return (
        <div className="projItem">
            <div className="projName">
                <Link className="projName" href={projItem.link} target={"_blank"}>{projItem.name}</Link>
                <BtnGitHub src={projItem.source}/>
            </div>
            <div className="projDescription">
                <ul className="projDescription">
                    {projItem.description.map((row, index) => <li key={index}
                                                                  dangerouslySetInnerHTML={{__html: transformHyperlinks(row)}}/>)}
                </ul>
            </div>
        </div>
    );
};

export default ProjComponent;