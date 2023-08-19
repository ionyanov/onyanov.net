import currentCV from "../data/data_rus";
import CVComponent from "../component/cvComponent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Онянов Илья',
    description: 'Резюме Онянов Илья',
}

export default function DeveloperRus() {
    return (
        <CVComponent currentCV={currentCV}/>
    );
};

