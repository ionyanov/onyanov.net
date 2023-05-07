import {Link} from "react-router-dom";
import React, {FC} from "react";

interface BtnGitHubProp {
    src: string,
    title?: string
}

export const BtnGitHub: FC<BtnGitHubProp> = ({src, title = 'Исходнй код'}) => {
    return (
        <Link to={src} target={"_blank"} title={title}>
            <img src={"https://github.com/fluidicon.png"} className="gitHub" alt={src}/>
        </Link>
    );
};