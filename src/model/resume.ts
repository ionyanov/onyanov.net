import Expiriense from "./expiriense";
import Education from "./education";
import Project from "./project";

class Locale {
    public lang: 'ru' | 'en' = 'ru';
    public Phone: string = '';
    public Email: string = '';
    public LinkedIn: string = '';
    public profile: string = '';
    public Web: string = '';
    public Address: string = '';
    public Experience: string = '';
    public Education: string = '';
    public Languages: string = '';
    public Projects: string = '';

}

class CV {
    public firstName: string = "";
    public middleName?: string;
    public lastName: string = "";

    public fullName: string = "";

    public photo?: string;
    public dateOfBirth?: Date;
    public jobTitle?: string;
    public description?: string[];
    public contactInfo: {
        phone?: string;
        email?: string;
        linkedIn?: string;
        address?: string;
        website?: string;
    } = {};
    public languages: {
        name?: string,
        level?: string
    }[] = [];
    public education: Education[] = [];
    public expiriense: Expiriense[] = [];
    public projects: Project[] = [];

    public tags: string[] = [];

    public local: Locale = {
        Address: "",
        Education: "",
        Email: "",
        Experience: "",
        Languages: "",
        LinkedIn: "",
        Phone: "",
        Projects: "",
        Web: "",
        lang: 'ru',
        profile: ""
    };
}

export default CV;