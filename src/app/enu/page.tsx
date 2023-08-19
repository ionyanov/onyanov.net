import currentCV from "../../data/data_enu";
import CVComponent from "../../component/cvComponent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Onyanov Ilya',
    description: 'Onyanov Ilya CV',
}

export default function DeveloperEnu() {
    return (
        <CVComponent currentCV={currentCV}/>
    );
};
