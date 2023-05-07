import Expiriense from "./expiriense";
import Education from "./education";
import Project from "./project";

class CV {
    public firstName: string = "";
    public middleName?: string;
    public lastName: string = "";

    get fullName(): string {
        return `${this.lastName} ${this.firstName} ${this.middleName}`;
    }

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

    get tags(): string [] {
        let _tags: string[] = []
        this.expiriense.map(item => _tags = [...new Set([..._tags, ...item.tags])]);
        return _tags.filter(Boolean).sort();
    }
}

export default CV;