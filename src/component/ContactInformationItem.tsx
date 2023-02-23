import React, {FC, ReactNode} from "react";

interface ContactInformationItemProps {
    style: string;
    title: string;
    children: ReactNode
}

export const ContactInformationItem: FC<ContactInformationItemProps> = (props) => {
    if (!props.children) {
        return <></>
    }
    return (<div className={['contactRow', props.style].join(' ')}>
        <div className="contactTitle">{props.title}:</div>
        <div className="contactValue">{props.children}</div>
    </div>)
}