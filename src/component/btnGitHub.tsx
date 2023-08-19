import React, {FC} from "react";
import Link from "next/link";

interface BtnGitHubProp {
    src: string,
    title?: string
}

export const BtnGitHub: FC<BtnGitHubProp> = ({src, title = 'Исходнй код'}) => {
    return (
        <Link href={src} target={"_blank"} title={title}>
            <img src='images/github.png' className="gitHub" alt={src}/>
        </Link>
    );
};